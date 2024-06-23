import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import {instructorParentLoginThunk} from '../redux/slices/instructorParentSlice';

const LoginModal = ({ open, onClose, loginType }) => {
  let { loginUserStatus, currentUser, errorOccurred, errMsg } = useSelector(state => state.instructorParentLoginReducer);
  let dispatch = useDispatch()
  let navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm();

  const getTitle = () => {
    switch (loginType) {
      case "instructor":
        return "Instructor Login";
      case "parent":
        return "Parent Login";
      case "admin":
        return "Admin Login";
      default:
        return "";
    }
  };

  const getForm = () => {
    switch (loginType) {
      case "admin":
        return (
          <>
            <TextField
              {...register("username", { required: true })}
              autoFocus
              margin="dense"
              label="Username"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              {...register("password", { required: true })}
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
            />
          </>
        );
      case "parent":
        return (
          <>
            <TextField
              {...register("username", { required: true })}
              autoFocus
              margin="dense"
              label="Username"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              {...register("password", { required: true })}
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
            />
          </>
        );
      case "instructor":
        return (
          <>
            <TextField
              {...register("username", { required: true })}
              autoFocus
              margin="dense"
              label="Username"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              {...register("password", { required: true })}
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
            />
          </>
        );
      default:
        return null;
    }
  };

  const onSubmit = async (data) => {
    data.userType = loginType;
    console.log("Form Data:", data);
    dispatch(instructorParentLoginThunk(data))
    
  };
  useEffect(() => {
    if (loginUserStatus === true) {
        console.log('login success')
      if (currentUser.userType === 'student') {
        navigate('/parent');
      } else if(currentUser.userType === 'instructor') {
        navigate('/instructor-attendance');
      }
      else{
        navigate('/admin-upload');
      }

    }
  }, [loginUserStatus, navigate, currentUser]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{getTitle()}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>{getForm()}</DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Login
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default LoginModal;