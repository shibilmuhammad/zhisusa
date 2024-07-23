const Room = require("../../models/liveModel");
const {
  ref,
  uploadBytes,
  getDownloadURL,
  getStorage,
} = require("firebase/storage");
const app = require("../../config/firebase");

module.exports = {
  getroomsData: (req, res) => {},
  addrooms: async (req, res) => {
    try {
      const formData = req.body;
      const files = req.files;
      const imageUrls = [];
      const storage = getStorage(app);
      for (const file of files) {
        const storageRef = ref(storage, `rooms/${file.originalname}`);
        await uploadBytes(storageRef, file.buffer);
        const downloadURL = await getDownloadURL(storageRef);
        imageUrls.push(downloadURL);
      }
      const roomData = {
        subcategoryId: formData.subcategoryId,
        title: formData.title,
        shortDescription: formData.shortDescription,
        description: formData.description,
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
      res.status(200).json({message:"Room added Successfully"});
    } catch (error) {
        res.status(500).json('An error occurred while adding the room.');
    }
  },
};
