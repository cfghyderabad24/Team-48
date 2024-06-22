const Admin = require('../models/adminModel')
const TableData = require('../models/tableModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registerAdmin = async (req,res)=>{
    try {
        const userObj = req.body;

        // Check if the user already exists
        const dbUser = await Admin.findOne({ username: userObj.username });
        if (dbUser) {
            return res.send({ message: "Username already exists" });
        }

        // Hash the password
        const hashedPass = await bcryptjs.hash(userObj.password, 6);
        userObj.password = hashedPass;

        // Create and save the new user
        const newUser = new Admin(userObj);
        await newUser.save();

        res.send({ message: "Admin registered" });
    } catch (error) {
        res.send({ message: "Internal server error" });
    }
}

const loginAdmin = async (req,res)=>{
    let userObj = req.body;
    const dbObj = await Admin.findOne({username:userObj.username})
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

const uploadData = async(req,res)=>{
    try {
        const { studentName, parentName, disability, location, phone_number } = req.body;
    
        // Create a new TableData instance
        const newTableData = new TableData({
          studentName,
          parentName,
          disability,
          location,
          phone_number
        });
    
        // Save the new table data to the database
        await newTableData.save();
    
        return res.json({ message: 'Table data inserted successfully', data: newTableData });
      } catch (error) {
        console.error('Error inserting table data:', error);
        return res.json({ message: 'Server error', error });
      }
}

const getAllTableData = async (req, res) => {
    try {
      // Fetch all table data from the database
      const tableData = await TableData.find();
  
      // Send the array of table data in the response
      return res.send({message:"table data",payload:tableData});
    } catch (error) {
      console.error('Error fetching table data:', error);
      return res.json({ message: 'Server error', error });
    }
  };

module.exports={
    registerAdmin,
    loginAdmin,
    uploadData,
    getAllTableData
};
