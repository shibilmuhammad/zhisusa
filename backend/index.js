const express = require("express");
const connectDB = require('./config/db')
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")
const session = require('express-session');
const cookieParser = require("cookie-parser");

app.use(cors())
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(session({
    secret: 'zhisusa', 
    resave: false,
    saveUninitialized: true,
  }));

 connectDB();
 const adminrouter = require('./routes/adminRoutes')
 const userrouter = require('./routes/userRoutes')
 app.use("/api/",userrouter)
 app.use("/api/admin",adminrouter)
 
const PORT = process.env.PORT || 8080;
 
app.listen(PORT,
    console.log(`Server started on port ${PORT}`)
);
app.get('/',(req,res)=>{
    res.send('hi')
})
