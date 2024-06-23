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
import { useSelector } from "react-redux";
import axios from 'axios'



const InstructorImg = () => {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [image, setImage] = useState(null);
  let { loginUserStatus, currentUser, errorOccurred, errMsg } = useSelector(state => state.instructorParentLoginReducer);
  let [studentNames,setNames] = useState(currentUser.students)

  const handleChange = (event) => {
    setSelectedStudent(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const submit = async()=>{
    const fileInput = document.getElementById('image');
    const ts = Date.now()
    const formData = new FormData();
    formData.append('file', fileInput.files[0], `student-${ts}.jpeg`);

    try {
        const fileUploadRes = await axios.post('http://localhost:4000/image-api/upload-image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (fileUploadRes.data.file) {
            // console.log('File uploaded successfully:', fileUploadRes.data.file);
            // Proceed with the rest of the form data submission
            alert("Image uploaded successfully")
        } else {
            alert('File upload failed');
        }
    }catch (error) {
        // console.error('Error uploading file:', error);
        alert('File upload failed');
    }
  }
  return (
    <Container maxWidth="100vw" style={{ padding: 0 }}>
      
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="60vh"
      >
        <FormControl
          variant="outlined"
          style={{ minWidth: 240, marginBottom: 120 }}
        >
          <InputLabel>Student Name</InputLabel>
          <Select
            value={selectedStudent}
            onChange={handleChange}
            label="Student Name"
          >
            {studentNames.map((name, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box width={300}>
          <Typography variant="body1" gutterBottom>
            Upload your Images here
          </Typography>
          <input
                                    type="file"
                                    className="form-control"
                                    id="image"
                                    
                                />
        </Box>
        <Button variant="contained" color="primary" onClick={submit}>
            Upload
          </Button>
      </Box>
    </Container>
  );
};

export default InstructorImg;