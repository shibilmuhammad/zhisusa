const jwt = require('jsonwebtoken');
require('dotenv').config()
const verifyToken = (req,res,next)=>{
    console.log("this is auth midddle ware");
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided' });
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.adminId = decoded.id;
        next()
    }catch(err){
        res.status(401).json({ message: 'Invalid token' });
        
    }
}
module.exports = {verifyToken}