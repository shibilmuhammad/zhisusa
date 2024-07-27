const Work = require("../../models/workModel");
const categoryModel = require('../../models/categoryModel')
const sharp = require('sharp');
const {
  ref,
  uploadBytes,
  getDownloadURL,
  getStorage,
} = require("firebase/storage");
const app = require("../../config/firebase");
const liveModel = require("../../models/liveModel");

module.exports = {
  getWorkTypes: async (req, res) => {
    try{
        const data = await Work.find();
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({message:"Internal Server Error"})
    }
  },
   addWork : async (req, res) => {
    console.log(req.body);
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
  
        const storageRef = ref(storage, `workingSpace/${file.originalname}`)
        await uploadBytes(storageRef, optimizedBuffer);
        const downloadURL = await getDownloadURL(storageRef);
        imageUrls.push(downloadURL);
      }
      const subcategory = await categoryModel.findOne({title:formData.subCategory});
      const roomData = {
        subcategoryId: subcategory._id,
        subcategory:formData.subCategory,
        title: formData.title,
        shortDescription: formData.shortDescription,
        description: formData.description,
        status:formData.status,
        details: {
          capacity: formData.capacity,
          size: formData.size,
          amenities: formData.amenities,
          price: {
            perHour: formData.perHour,
            perDay: formData.perDay,
            perMonth: formData.perMonth,
          },
          availability: formData.availability,
          location: {
            workSpaceNumber: formData.workingspaceNumber,
            floor: formData.floor,
            proximityToAmenities: formData.proximityToAmenities,
          },
          images: imageUrls,
          bookingOptions: formData.bookingOptions,
          customizations: formData.customizations,
        },
      };
      const newRoom = new Work(roomData);
      await newRoom.save();
      res.status(200).json({ message: "Room added Successfully" });
    } catch (error) {
      res.status(500).json('An error occurred while adding the room.');
    }
  },deleteWork: async(req,res)=>{
    try{
      const deletedDocument = await Work.findByIdAndDelete(req.body.id);
      res.json({status:'success'})
    }catch(error){
      res.status(500).json({status:false})
    }
  },editWork: async(req,res) =>{
    try {
      const formData = req.body;
      const files = req.files;

      let imageUrls = [];
      
      if(formData.images) {
        if (!Array.isArray(formData.images)) {
          let imageArray = formData?.images?.split(',');
          imageUrls = imageArray
        } 
        imageUrls = formData.images
         
      } 
      const storage = getStorage(app);
      if(files){
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
      }
      const subcategory = await categoryModel.findOne({title:formData.subCategory});
      console.log('formData is',formData);
      console.log('subcategory is ',subcategory);
      const roomData = {
        subcategoryId: subcategory._id,
        subcategory:formData.subCategory,
        title: formData.title,
        shortDescription: formData.shortDescription,
        description: formData.description,
        status:formData.status,
        details: {
          capacity: formData.capacity,
          size: formData.size,
          amenities: formData.amenities,
          price: {
            perHour: formData.perHour,
            perDay: formData.perDay,
            perMonth: formData.perMonth,
          },
          availability: formData.availability,
          location: {
            workSpaceNumber: formData.workingspaceNumber,
            floor: formData.floor,
            proximityToAmenities: formData.proximityToAmenities,
          },
          images: imageUrls,
          bookingOptions: formData.bookingOptions,
          customizations: formData.customizations,
        },
      };
      const updatedRoom = await Work.findOneAndUpdate({_id:formData.id},roomData);
      res.status(200).json({ message: "Room added Successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json('An error occurred while adding the room.');
    }
  }
};
