import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios'

const AdminUpload = () => {
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    let res = await axios.post('http://localhost:4000/admin-api/upload-data',data);
    if(res.data.message=='Table data inserted successfully'){
        alert("data inserted successfully")
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      
      <Container
        maxWidth="100vw"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#e9ecef",
          justifyContent: "center",
          paddingTop: 8,
          paddingLeft: 2,
          paddingRight: 2,
        }}
      >
        <Box
          sx={{
            marginTop: 4,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              maxWidth: 400,
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              color="textPrimary"
            >
              Student Data
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="studentName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Student Name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                  />
                )}
              />
              <Controller
                name="parentName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Parent Name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                  />
                )}
              />
              <Controller
                name="disability"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Disability"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                  />
                )}
              />
              <Controller
                name="location"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Location"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                  />
                )}
              />
              <Controller
                name="phone_number"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone Number"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                  />
                )}
              />
              <Box textAlign="center" mt={3}>
                <Button type="btn btn-submit" variant="contained" color="primary">
                  Upload
                </Button>
              </Box>
            </form>
          </Paper>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default AdminUpload;