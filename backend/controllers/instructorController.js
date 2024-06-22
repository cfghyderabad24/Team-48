const Instructor = require('../models/instructorModel');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registerInstructor = async (req,res)=>{
    try {
        const userObj = req.body;

        // Check if the user already exists
        const dbUser = await Instructor.findOne({ username: userObj.username });
        if (dbUser) {
            return res.send({ message: "Username already exists" });
        }

        // Hash the password
        const hashedPass = await bcryptjs.hash(userObj.password, 6);
        userObj.password = hashedPass;

        // Create and save the new user
        const newUser = new Instructor(userObj);
        await newUser.save();

        res.send({ message: "Instructor registered" });
    } catch (error) {
        console.error('Error registering user:', error);
        res.send({ message: "Internal server error" });
    }
}

const loginUser = async (req,res)=>{
    let userObj = req.body;
    const dbObj = await Instructor.findOne({username:userObj.username})
    if(dbObj===null){
        res.send({message:"Invalid Username"})
    }
    else{
        let status = await bcryptjs.compare(userObj.password,dbObj.password)
        if(status===false){
            res.send({message:"Invalid password"})
        }
        else{
            let signedToken = jwt.sign({username:userObj.username},process.env.SECRET_KEY,{expiresIn:'1d'})
            res.send({message:"Login successful",token:signedToken,user:dbObj})
        }
    }
}
