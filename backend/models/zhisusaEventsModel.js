const mongoose = require("mongoose");

const zhisusaEventsSchema = new mongoose.Schema({
  title: String, // or "Boating", etc.
  status : String,
  type : String,
  eventId: {
    type: String,
    unique: true,
  },
  details: {
    description: String,
    capacity: Number,
    price: Number,
    language : String,
    ageGroup : String,
    termsAndConditions : String,

    schedule: {
      date: String,
      time: String
    },
    
    location: {
      venue: String,
	    proximityToAmenities: String,
      map : String
    },
    images: [String],
    
  }
})


  
  const zhisusaEvents = mongoose.model("zhisusa events", zhisusaEventsSchema);

  module.exports = zhisusaEvents;