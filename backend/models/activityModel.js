const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  mainCategory: String, // Reference to Subcategory ID
  title: String, // or "Boating", etc.
  status : String,
  details: {
    description: String,
    capacity: Number,
    price: {
      perSession: Number,
      perDay: Number
    },
    packageIncludes : [String],
    schedule: {
      availability: String,
      time: String
    },
    
    location: {
      place: String,
	  proximityToAmenities: String
    },
    images: [String],
    bookingOptions: String,
    
  }
})


  
  const activites = mongoose.model("activities", activitySchema);

  module.exports = activites;