const mongoose = require("mongoose");

const liveSchema = new mongoose.Schema(
  {
    subcategoryId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    title: {
      type: String,
    },
    details: {
      capacity: {
        adult:{
          type:Number,
        },
        child:{
          type:Number,
        },
      },
      size: {
        type: String,
      },
      amenities: {
        type: [String],
      },
      price: {
        perNight: {
          type: Number,
        },
        perWeek: {
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
        roomNumber: {
          type: String,
        },
        floor: {
          type: String,
        },
        view: {
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
const liveModel = mongoose.model('rooms',liveModel)
