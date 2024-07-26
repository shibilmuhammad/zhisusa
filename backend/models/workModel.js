const mongoose = require("mongoose");

const workSchema = new mongoose.Schema(
  {
    subcategoryId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    subcategory:{
      type: String
    },
    title: {
      type: String,
    },
    shortDescription:{
      type:String,
    },
    description:{
      type:String,
    },
    status:{
      type:String,
    },
    details: {
      capacity:{
        type:Number
      },
      size: {
        type: String,
      },
      amenities: {
        type: [String],
      },
      price: {
        perHour: {
          type: Number,
        },
        perDay: {
          type: Number,
        },
        perMonth: {
          type: Number,
        },
      },
      availability: {
        type: String,
      },
      location: {
        workSpaceNumber: {
          type: String,
        },
        floor: {
          type: String,
        },
        proximityToAmenities: {
          type: String,
        },
      },
      images: {
        type: [String],
      },
      bookingOptions: {
        type: String,
      },
      customizations: {
        type: [String],
      },  
    },
  },
  {
    timestamps: true,
  }
);
const workModel = mongoose.model('rooms',workSchema)
module.exports = workModel