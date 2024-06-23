import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
  Box,
} from "@mui/material";
import axios from 'axios'
import { Link } from "react-router-dom";
  

const AdminTable = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
      const getData = async()=>{
          let dbres = await axios.get('http://localhost:4000/admin-api/get-all-data');
          setData(dbres.data.payload)
      }
    getData();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <Typography variant="h4" gutterBottom>
          Student Data Table
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student Name</TableCell>
                <TableCell>Parent Name</TableCell>
                <TableCell>Disability</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.studentName}</TableCell>
                  <TableCell>{row.parentName}</TableCell>
                  <TableCell>{row.disability}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.phone_number}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </React.Fragment>
  );
};

export default AdminTable;