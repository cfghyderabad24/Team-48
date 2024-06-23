import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Paper,
  Box,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const Volunteer = () => {
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <Container
      maxWidth="100vw"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#e9ecef",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
          maxWidth: 400,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          color="textPrimary"
        >
          Volunteer Application
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="name">Name</InputLabel>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} id="name" variant="outlined" required />
              )}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  id="email"
                  type="email"
                  variant="outlined"
                  required
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="phone">Phone</InputLabel>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  id="phone"
                  type="tel"
                  variant="outlined"
                  required
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="volunteer-type-label">Volunteer Type</InputLabel>
            <Controller
              name="volunteer-type"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="volunteer-type-label"
                  id="volunteer-type"
                  variant="outlined"
                  required
                >
                  <MenuItem value="" disabled>
                    Select Volunteer Type
                  </MenuItem>
                  <MenuItem value="awareness">Awareness Volunteer</MenuItem>
                  <MenuItem value="fundraising">Fundraising Volunteer</MenuItem>
                  <MenuItem value="social">Social Volunteer</MenuItem>
                </Select>
              )}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="contribution">Experience</InputLabel>
            <Controller
              name="contribution"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  id="contribution"
                  multiline
                  rows={4}
                  variant="outlined"
                  required
                />
              )}
            />
          </FormControl>
          <Box textAlign="center" mt={3}>
            <Button type="submit" variant="contained" color="primary">
              Apply Now
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Volunteer;