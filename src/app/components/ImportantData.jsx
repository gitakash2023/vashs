import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { PeopleAlt, WorkOutline, Assignment } from '@mui/icons-material';

const ImportantData = () => {
  // Static data
  const enrolledStudents = 500;
  const jobPlacements = 250;
  const totalProjects = 100;

  // Function to format numbers with commas
  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Container maxWidth="md">
     
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: '#f0f0f0' }}>
            <CardContent style={{ textAlign: 'center' }}>
              <PeopleAlt fontSize="large" color="primary" />
              <Typography variant="h5" component="h2" gutterBottom>
                Enrolled Students
              </Typography>
              <Typography variant="h4">{formatNumberWithCommas(enrolledStudents)}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: '#f0f0f0' }}>
            <CardContent style={{ textAlign: 'center' }}>
              <WorkOutline fontSize="large" color="primary" />
              <Typography variant="h5" component="h2" gutterBottom>
                Job Placements
              </Typography>
              <Typography variant="h4">{formatNumberWithCommas(jobPlacements)}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: '#f0f0f0' }}>
            <CardContent style={{ textAlign: 'center' }}>
              <Assignment fontSize="large" color="primary" />
              <Typography variant="h5" component="h2" gutterBottom>
                Total Projects
              </Typography>
              <Typography variant="h4">{formatNumberWithCommas(totalProjects)}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ImportantData;
