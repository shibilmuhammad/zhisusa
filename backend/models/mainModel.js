const mongoose = require("mongoose");

const mainSchema = new mongoose.Schema({

  title : String,
  categories : [String]
})


  
  const main = mongoose.model("mainList", mainSchema);

  module.exports = main;