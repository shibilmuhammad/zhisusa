const mongoose = require('mongoose');
const config = require('./config');
const connectDB = async()=>{
    
    try{
        await mongoose.connect(config.mongoURI,);  
          console.log('MongoDB connected successfully');
    }catch(error){
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
}
module.exports = connectDB;