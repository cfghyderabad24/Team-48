const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Student = require('../models/studentModel');
const Instructor = require('../models/instructorModel');



const registerStudent = async (req, res) => {
    try {
        const userObj = req.body;

        // Check if the user already exists
        const dbUser = await Student.findOne({ username: userObj.username });
        if (dbUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        // Hash the password
        const hashedPass = await bcryptjs.hash(userObj.password, 6);
        userObj.password = hashedPass;

        // Create and save the new user
        const newUser = new Student(userObj);
        await newUser.save();

        res.status(201).json({ message: "Student registered" });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: "Internal server error" });
    }
}





const loginStudent = async (req,res)=>{
    let userObj = req.body;
    const dbObj = await Student.findOne({username:userObj.username})
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

const getStudent = async (req,res) =>{
    
    try{
    const username1=req.params.username;
    const student = await Student.findOne({username: username1});    
    res.send({message: "Single student", payload: student})
    }catch(error){
        res.send({message: "An error occured"})
    }
}

const getInstructor= async (req,res) => {
    try{
        const username1 = req.params.username;
    const student = await Student.findOne({username:username1})
    const instructor = await Instructor.findOne({username: student.instructor_username});
    res.send({message: "Instructor", payload: instructor})
    }catch(error){
        res.send({message: "An error occured"})
    }
}


module.exports = {loginStudent, registerStudent, getInstructor, getStudent}