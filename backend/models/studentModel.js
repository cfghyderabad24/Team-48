const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
  studentName: {
    type: String,
    required: true
  },
  parentName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  obtained_marks: {
    type: Number,
    required: true
  },
  total_marks: {
    type: Number,
    required: true
  },
  attendance: {
    type: Number,
    required: true
  },
  total_attendance: {
    type: Number,
    required: true
  },
  therapy_marks: {
    type: Number,
    required: true
  },
  total_therapy_marks: {
    type: Number,
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;