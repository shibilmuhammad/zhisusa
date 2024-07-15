const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({

  title : String,
  main_category : String,
  status : String,
  types : []
})


  
  const category = mongoose.model("categories", categorySchema);

  module.exports = category;