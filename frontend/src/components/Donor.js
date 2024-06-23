import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

const Donor = () => {
  return (
    <Container
      maxWidth="100vw"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#e9ecef",
      }}
    >
      <Paper
        sx={{
          padding: 3,
          borderRadius: 2,
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: 400,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          sx={{ color: "#333" }}
        >
          Donate Now
        </Typography>
        <Box component="form" action="YOUR_SERVER_SCRIPT_URL" method="POST">
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Amount"
            name="amount"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Phone"
            name="phone"
            type="tel"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Description"
            name="description"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="success"
            fullWidth
            sx={{
              marginTop: 2,
              padding: 2,
              fontSize: 18,
              ":hover": {
                backgroundColor: "#218838",
              },
            }}
          >
            Pay Now
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Donor;