const mongoose = require("mongoose");

const transactionsSchema = new mongoose.Schema({
  userName : String, // Reference to Subcategory ID
  phone: String, // or "Boating", etc.
  email : String,
  orderId : String,
  details: {
    method: String,
    date: String,
    paymentId : String,
    status : String,
    amount : Number
  }
})

  const tranactions = mongoose.model("transactions", transactionsSchema);

  module.exports = tranactions;