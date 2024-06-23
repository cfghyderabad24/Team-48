import React,{useState,useEffect} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = styled((theme) => ({
  header: {
    marginBottom: theme.spacing(4),
  },
  table: {
    minWidth: 650,
  },
  updateButton: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end", // move button to the right
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
}));



const InstructorAtt = () => {
  const classes = useStyles();
  let { loginUserStatus, currentUser, errorOccurred, errMsg } = useSelector(state => state.instructorParentLoginReducer);
    let [rows,setRow] = useState(currentUser.students)
    useEffect(()=>{
        console.log(rows)
    })
  return (
    <div>
      
      <Container>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Student username</TableCell>
                <TableCell align="center">Today's Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row}>
                  <TableCell>{row}</TableCell>
                  <TableCell align="center">
                    <Checkbox />
                    {new Date().toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box className={classes.updateButton}>
          <Button variant="contained" color="primary">
            Update
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default InstructorAtt;