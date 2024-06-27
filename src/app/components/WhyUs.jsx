import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import AppsIcon from '@mui/icons-material/Apps';
import ScheduleIcon from '@mui/icons-material/Schedule';
import UpdateIcon from '@mui/icons-material/Update';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const WhyUs = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {/* Left Side */}
          <Grid item xs={12} md={6}>
            <Box sx={{ background: 'linear-gradient(to right, #a8e063, #56ab2f)', p: 2, borderRadius: 2, boxShadow: 3 }}>
              <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h4" color="primary" gutterBottom>
                    Get in Touch
                  </Typography>
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    Sustainability Committed To Serve Quality And Secure Services. We Work Closely With Our Team And Client Throughout Development To Ensure That We Are Still Aligned With The End-Goal. We Are Committed To Producing Exceptional Software For Each Of Our Clients.
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h4" color="primary" gutterBottom>
                  Reasons to Choose Us
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                      <GroupIcon color="primary" sx={{ mr: 2 }} />
                      <Typography variant="body1">
                        A Dedicated Team Will Be Assigned Under The Surveillance Of An Experienced Team Leader.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                      <AppsIcon color="primary" sx={{ mr: 2 }} />
                      <Typography variant="body1">
                        Personalize Application
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                      <ScheduleIcon color="primary" sx={{ mr: 2 }} />
                      <Typography variant="body1">
                        Project On Time
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                      <UpdateIcon color="primary" sx={{ mr: 2 }} />
                      <Typography variant="body1">
                        Latest Version
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                      <SupportAgentIcon color="primary" sx={{ mr: 2 }} />
                      <Typography variant="body1">
                        24/7 Customer Support
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Fixed Internship Button */}
      {/* <Box sx={{ position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 1300 }}>
        <Button variant="contained" color="secondary">
          INTERNSHIP
        </Button>
      </Box> */}
    </>
  );
};

export default WhyUs;
