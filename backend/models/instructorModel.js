const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  instructorName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  students: {
    type: [String], // Array of student usernames
    default: []
  }
});

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;
