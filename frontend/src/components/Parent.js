import React from "react";
import { Container, Box, Button, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut, Pie } from 'react-chartjs-2';
import { PolarArea } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Header = styled(Box)({
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px 0",
});

const HeaderContent = styled(Box)({
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "0 20px",
});

const GraphBox = styled(Paper)({
  padding: "20px",
  backgroundColor: "#f0f0f0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "20px",
  boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
});

const PhotoBox = styled(Paper)({
  padding: "20px",
  backgroundColor: "#f0f0f0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
});

const FeedbackBox = styled(Paper)({
  backgroundColor: "#f0f0f0",
  padding: "20px",
  marginTop: "20px",
  boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
});

const Footer = styled(Box)({
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "20px 0",
});


const Parent = () => {
    let { loginUserStatus, currentUser, errorOccurred, errMsg } = useSelector(state => state.instructorParentLoginReducer);
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/student-api/student/${currentUser.username}`);
                setStudent(response.data.payload);
            } catch (err) {
                setError("An error occurred while fetching the student data.");
            } finally {
                setLoading(false);
            }
        };

        fetchStudent();
    }, [currentUser.username]);

    useEffect(() => {
        if (student) {
            // Initialize gauge charts
            const attendanceChart = createGaugeChart('attendanceChart', student.attendance, student.total_attendance);
            const academicMarksChart = createGaugeChart('academicMarksChart', student.obtained_marks, student.total_marks);
            const therapyMarksChart = createGaugeChart('therapyMarksChart', student.therapy_marks, student.total_therapy_marks);

            // Cleanup function
            return () => {
                attendanceChart.destroy();
                academicMarksChart.destroy();
                therapyMarksChart.destroy();
            };
        }
    }, [student]);

    const createGaugeChart = (chartId, value, maxValue) => {
        const ctx = document.getElementById(chartId);

        return new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [chartId],
                datasets: [{
                    data: [value, maxValue - value],
                    backgroundColor: ['#36A2EB', '#E7E9ED'],
                    borderWidth: 0,
                }]
            },
            options: {
                cutout: '90%',
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                },
            },
        });
    };


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

  return (
    <div>


      <Container maxWidth="md" sx={{ marginTop: 3 }}>
        <Typography variant="h4" gutterBottom>
          Child Progress
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
          <h2>Attendance</h2>
          <canvas id="attendanceChart" width="200" height="200"></canvas>
          </Grid>
          <Grid item xs={12} sm={4}>
          <h2>Academic Score</h2>
          <canvas id="academicMarksChart" width="200" height="200"></canvas>
          </Grid>
          <Grid item xs={12} sm={4}>
          <h2>Therapy Score</h2>
          <canvas id="therapyMarksChart" width="200" height="200"></canvas>
          </Grid>
        </Grid>

        <Typography variant="h5" gutterBottom sx={{ marginTop: 3 }}>
          Recent Activities
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <PhotoBox>
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.RW5iLzu3Y2E8xfyLhNF-YgHaE6&pid=Api&P=0&h=180"
                alt="Photo 1"
                style={{ maxWidth: "100%" }}
              />
            </PhotoBox>
          </Grid>
          <Grid item xs={12} sm={3}>
            <PhotoBox>
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.ybgQthF5iWNhQcfVmx6inAHaE7&pid=Api&P=0&h=180"
                alt="Photo 2"
                style={{ maxWidth: "100%" }}
              />
            </PhotoBox>
          </Grid>
          <Grid item xs={12} sm={3}>
            <PhotoBox>
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.GqshCoJzhPwG4eeKcO3LzwHaE7&pid=Api&P=0&h=180"
                alt="Photo 3"
                style={{ maxWidth: "100%" }}
              />
            </PhotoBox>
          </Grid>
          <Grid item xs={12} sm={3}>
            <PhotoBox>
              <img
                src="https://thelogicalindian.com/wp-content/uploads/2018/04/1-1.jpg"
                alt="Photo 4"
                style={{ maxWidth: "100%" }}
              />
            </PhotoBox>
          </Grid>
        </Grid>

        <FeedbackBox sx={{ marginBottom: 5 }}>
          <Typography variant="h6" gutterBottom>
            Feedback
          </Typography>
          <Typography variant="body1">
            This section contains feedback regarding the child's recent
            activities and progress.
          </Typography>
        </FeedbackBox>
      </Container>

      <Footer>
        <Container maxWidth="md">
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography>Email: example@email.com</Typography>
          <Typography>Phone: +1234567890</Typography>
        </Container>
      </Footer>
    </div>
  );
};

export default Parent;