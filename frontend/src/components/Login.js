import React, { useState } from "react";
import { Container, Grid, Paper, Typography, Button } from "@mui/material";
import LoginModal from "./LoginModal";

const Login = () => {
  const [open, setOpen] = useState(false);
  const [loginType, setLoginType] = useState("");

  const handleOpen = (type) => {
    setLoginType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setLoginType("");
  };

  return (
    <Container>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        style={{ marginTop: "5%" }}
      >
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h4" gutterBottom style={{ color: "green" }}>
              For Instructors
            </Typography>
            <Typography variant="body1" gutterBottom>
              For the instructors who are teaching the wonderful children and taking care of them
            </Typography>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleOpen("instructor")}
            >
              Login
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h4" gutterBottom style={{ color: "green" }}>
              For Parents
            </Typography>
            <Typography variant="body1" gutterBottom>
              Join many parents who have entrusted our organization for the future of their children
            </Typography>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleOpen("parent")}
            >
              Login
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h4" gutterBottom style={{ color: "green" }}>
              For Admin
            </Typography>
            <Typography variant="body1" gutterBottom>
              Administrative access to handle students data which has been collected
            </Typography>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleOpen("admin")}
            >
              Login
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <LoginModal open={open} onClose={handleClose} loginType={loginType} />
    </Container>
  );
};

export default Login;