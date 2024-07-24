const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  mainCategory: String, // Reference to Subcategory ID
  title: String, // or "Boating", etc.
  status : String,
  details: {
    description: String,
    capacity: Number,
    price: Number,
    eventOptions : [String],
    packages : [{}],
    location: {
      place: String,
	    proximityToAmenities: String
    },
    images: [String],
    
  }
})


  
  const events = mongoose.model("events",eventSchema);

  module.exports = events;