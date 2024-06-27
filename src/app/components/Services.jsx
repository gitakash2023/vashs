import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import {
  Web,
  PhoneAndroid,
  DesktopMac,
  Security,
  Cloud,
  Code
} from '@mui/icons-material';
import ContactUs from './ContactUs';

const services = [
  { title: 'Web Development', description: 'We offer professional web development services tailored to your specific business needs.', icon: <Web fontSize="large" color="primary" />, link: '/web-development' },
  { title: 'Mobile App Development', description: 'Our mobile app development services help businesses reach their audience on various platforms.', icon: <PhoneAndroid fontSize="large" color="primary" />, link: '/app-development' },
  { title: 'Desktop App Development', description: 'We specialize in creating powerful and user-friendly desktop applications for your business.', icon: <DesktopMac fontSize="large" color="primary" />, link: '/desktop-development' },
  { title: 'Security Services', description: 'Protect your business with our top-notch security services.', icon: <Security fontSize="large" color="primary" />, link: '/security-services' },
  { title: 'Cloud Solutions', description: 'Leverage the power of the cloud with our comprehensive cloud solutions.', icon: <Cloud fontSize="large" color="primary" />, link: '/cloud-solutions' },
  { title: 'Custom Software Development', description: 'Get custom software solutions tailored to your specific needs.', icon: <Code fontSize="large" color="primary" />, link: '/custom-software' }
];

const Services = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ mb: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Box display="flex" justifyContent="center" mb={2}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" component="h2" align="center" sx={{ fontSize: '1.5rem' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" component="p" align="center" sx={{ fontSize: '1rem', mt: 2 }}>
                    {service.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" fullWidth href={service.link}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box mt={8}>
        <ContactUs />
      </Box>
    </>
  );
};

export default Services;
