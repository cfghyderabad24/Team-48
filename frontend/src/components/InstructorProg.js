import React, { useState } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from 'axios'

const studentNames = [
  "John Doe",
  "Jane Smith",
  "Student 3",
  "Student 4",
  "Student 5",
  "Student 6",
  "Student 7",
  "Student 8",
  "Student 9",
  "Student 10",
];

const progressTypes = ["Educational Progress", "Therapy Progress"];

const InstructorProg = () => {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [progressType, setProgressType] = useState("");
  const [marks, setMarks] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleStudentChange = (event) => {
    setSelectedStudent(event.target.value);
  };

  const handleProgressTypeChange = (event) => {
    setProgressType(event.target.value);
  };

  const handleMarksChange = (event) => {
    setMarks(event.target.value);
  };

  const handleTotalMarksChange = (event) => {
    setTotalMarks(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleUpdate = async () => {
    // Handle the update logic here
    console.log({
      selectedStudent,
      progressType,
      marks,
      totalMarks,
      feedback,
    });
    if(progressType=='Educational Progress'){
        let data = {obtained_marks:marks,total_marks:totalMarks}
       let res = await axios.post(`http://localhost:4000/instructor-api/update-academic-marks/${selectedStudent}`,data)
       if(res.data.message=='Academic marks updated successfully'){
           alert('data updated')
       }
    }
    else{
        let data = {therapy_marks:marks,total_therapy_marks:totalMarks}
       let res = await axios.post(`http://localhost:4000/instructor-api/update-therapy-marks/${selectedStudent}`,data)
       if(res.data.message=='Academic marks updated successfully'){
           alert('data updated')
       }
    }
  };

  return (
    <Container maxWidth="100vw" style={{ padding: 0 }}>
      
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="60vh"
        padding={2}
      >
        <FormControl
          variant="outlined"
          style={{ minWidth: 300, marginBottom: 20 }}
        >
          <InputLabel>Progress Type</InputLabel>
          <Select
            value={progressType}
            onChange={handleProgressTypeChange}
            label="Progress Type"
          >
            {progressTypes.map((type, index) => (
              <MenuItem key={index} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          variant="outlined"
          style={{ minWidth: 300, marginBottom: 20 }}
        >
          <InputLabel>Student Name</InputLabel>
          <Select
            value={selectedStudent}
            onChange={handleStudentChange}
            label="Student Name"
          >
            {studentNames.map((name, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box width={300} marginBottom={2}>
          <TextField
            label="Student Score"
            variant="outlined"
            type="number"
            fullWidth
            value={marks}
            onChange={handleMarksChange}
            margin="normal"
          />
          <TextField
            label="Total Score"
            variant="outlined"
            type="number"
            fullWidth
            value={totalMarks}
            onChange={handleTotalMarksChange}
            margin="normal"
          />
        </Box>
        <Box width={500} marginBottom={2}>
          <TextField
            label="Feedback"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={feedback}
            onChange={handleFeedbackChange}
            margin="normal"
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdate}
          sx={{ bgcolor: "#4caf50", "&:hover": { bgcolor: "#388e3c" } }}
        >
          Update
        </Button>
      </Box>
    </Container>
  );
};

export default InstructorProg;