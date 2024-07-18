const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  mainCategoryId: mongoose.Schema.Types.ObjectId, // Reference to Subcategory ID
  title: String, // or "Boating", etc.
  details: {
    description: String,
    capacity: Number,
    price: {
      perSession: Number,
      perDay: Number
    },
    packageIncludes : [String],
    schedule: {
      availability: Stirng,
      time: String
    },
    status : String,
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