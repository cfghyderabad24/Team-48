const Instructor = require('../models/instructorModel');
const Student = require('../models/studentModel')
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

const loginInstructor = async (req,res)=>{
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

const updateAttendance = async (req, res) => {
    const { instructorUsername, attendanceUpdates } = req.body; // Assuming you send instructorUsername and attendanceUpdates from the client
  
    try {
      // Find the instructor by username
      const instructor = await Instructor.findOne({ username: instructorUsername });
  
      if (!instructor) {
        return res.status(404).json({ message: 'Instructor not found' });
      }
  
      // Iterate through each student's attendance update
      for (const update of attendanceUpdates) {
        const { studentUsername, attendance } = update;
  
        // Find the student by username
        const student = await Student.findOne({ username: studentUsername });
  
        if (student) {
          // Increment total attendance
          student.total_attendance += 1;
  
          // Update attendance if the value is true
          if (attendance) {
            student.attendance += 1;
          }
  
          // Save the updated student document
          // This will not create a new student but update the existing one
          await student.save();
        }
      }
  
      return res.status(200).json({ message: 'Attendance updated successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Server error', error });
    }
  };

  const updateAcademicMarks = async (req, res) => {
    const { studentUsername } = req.params;
    const { obtained_marks, total_marks } = req.body;
  
    try {
      // Find the student by username
      const student = await Student.findOne({ username: studentUsername });
  
      if (!student) {
        return res.json({ message: 'Student not found' });
      }
  
      // Update the obtained marks and total marks
      student.obtained_marks += obtained_marks;
      student.total_marks += total_marks;
  
      // Save the updated student document
      await student.save();
  
      return res.json({ message: 'Academic marks updated successfully', student });
    } catch (error) {
      return res.json({ message: 'Server error', error });
    }
  };

  const updateTherapyMarks = async (req, res) => {
    const { studentUsername } = req.params;
    const { obtained_marks, total_marks } = req.body;
  
    try {
      // Find the student by username
      const student = await Student.findOne({ username: studentUsername });
  
      if (!student) {
        return res.json({ message: 'Student not found' });
      }
  
      // Update the obtained marks and total marks
      student.therapy_marks += obtained_marks;
      student.total_therapy_marks += total_marks;
  
      // Save the updated student document
      await student.save();
  
      return res.json({ message: 'Academic marks updated successfully', student });
    } catch (error) {
      return res.json({ message: 'Server error', error });
    }
  };

  


  module.exports = {
    registerInstructor,
    loginInstructor,
    updateAttendance,
    updateAcademicMarks,
    updateTherapyMarks
  };
  
