const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adminSchema = new Schema({
    userType:{
      type:String,
      required:true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  });
  
  const Admin = mongoose.model('Admin', adminSchema);
  
  module.exports = Admin;