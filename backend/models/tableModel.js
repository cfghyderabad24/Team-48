const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableDataSchema = new Schema({
  studentName: {
    type: String,
    required: true
  },
  parentName: {
    type: String,
    required: true
  },
  disability: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  }
});

const TableData = mongoose.model('TableData', tableDataSchema);

module.exports = TableData;
