const Room = require("../../models/liveModel");
const categoryModel = require('../../models/categoryModel')
const sharp = require('sharp');
const {
  ref,
  uploadBytes,
  getDownloadURL,
  getStorage,
} = require("firebase/storage");
const app = require("../../config/firebase");

module.exports = {
  getroomsData: async (req, res) => {
      const data = await Room.find();
      res.status(200).json({data})

  },
   addrooms : async (req, res) => {
    try {
      const formData = req.body;
      const files = req.files;
      const imageUrls = [];
      const storage = getStorage(app);
  
      for (const file of files) {
        // Optimize the image using Sharp
        const optimizedBuffer = await sharp(file.buffer)
          .resize(800, 800, {
            fit: sharp.fit.inside,
            withoutEnlargement: true,
          })
          .jpeg({ quality: 80 })
          .toBuffer();
  
        const storageRef = ref(storage, `rooms/${file.originalname}`)
        await uploadBytes(storageRef, optimizedBuffer);
        const downloadURL = await getDownloadURL(storageRef);
        imageUrls.push(downloadURL);
      }
      console.log(imageUrls);
      console.log('frodatasubcate',formData);
      console.log('status is ',formData.status);
      const subcategory = await categoryModel.findOne({title:formData.subCategory});
      console.log('subcategory id ',subcategory._id);
      const roomData = {
        subcategoryId: subcategory._id,
        subcategory:formData.subCategory,
        title: formData.title,
        shortDescription: formData.shortDescription,
        description: formData.description,
        status:formData.status,
        details: {
          capacity: {
            adult: formData.adultCapacity,
            child: formData.childCapacity,
          },
          size: formData.size,
          amenities: formData.amenities,
          price: {
            perNight: formData.perNight,
            perWeek: formData.perWeek,
            perMonth: formData.perMonth,
          },
          availability: formData.availability,
          location: {
            roomNumber: formData.roomNumber,
            floor: formData.floor,
            view: formData.view,
            proximityToAmenities: formData.proximityToAmenities,
          },
          images: imageUrls,
          bookingOptions: formData.bookingOptions,
          customizations: formData.customizations,
        },
      };
  
      const newRoom = new Room(roomData);
      await newRoom.save();
      res.status(200).json({ message: "Room added Successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json('An error occurred while adding the room.');
    }
  }
};
