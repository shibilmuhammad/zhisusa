const Admin = require('../../models/adminModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config()
module.exports = {
    postLogin:async(req,res)=>{
        const {username,password} = req.body;
        try{
            const admin = await Admin.findOne({username});
            if(!admin) return res.status(400).json({message:"Invalid username or password"})
            const isMatch = await bcrypt.compare(password,admin.password);
            if(!isMatch) return res.status(400).json({message:"Invalid username or password"});
            const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
            res.cookie('jwt',token,{
                httpOnly:true,
                secure:true,
                sameSite:'strict',
            })
            res.status(200).json({message:"login Successfull"})
        }catch(err){
            res.status(500).json({message:"Server Error"})
        }
    },logout: async(req,res)=>{
        res.clearCookie('jwt', {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
        });
        res.status(200).json({message:"Logout Successful"})
    },validateToken: async(req,res)=>{
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        } jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }
            res.status(200).json({ message: 'Token is valid', userId: decoded.id });
        });
    }
}