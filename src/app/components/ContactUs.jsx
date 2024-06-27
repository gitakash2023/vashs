import React from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import { Email, Phone, LocationOn, Send,AccountCircle } from '@mui/icons-material';

export default function ContactUs() {
  return (
    <Box mt={12}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom >
          Get In Touch
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom align="center">
              Head Office
            </Typography>
            <Box display="flex" alignItems="center" flexDirection="column" mb={2}>
              <LocationOn color="primary" />
              <Box mt={1}>
                <Typography variant="body1" align="center">Address:</Typography>
                <Typography variant="body2" align="center">Bengaluru, India</Typography>
                <Typography variant="body2" align="center">Bhubaneswar, India</Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column" mb={2}>
              <Phone color="primary" />
              <Box mt={1}>
                <Typography variant="body1" align="center">Phone:</Typography>
                <Typography variant="body2" align="center">+91 7991492897</Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Email color="primary" />
              <Box mt={1}>
                <Typography variant="body1" align="center">Email:</Typography>
                <Typography variant="body2" align="center">support@vash.in</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom align="center">
              Get Appointment
            </Typography>
            <Box component="form" mt={2}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name"
                InputProps={{
                  startAdornment: (
                    <AccountCircle position="start" />
                  ),
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Email"
                InputProps={{
                  startAdornment: (
                    <Email position="start" />
                  ),
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Phone"
                InputProps={{
                  startAdornment: (
                    <Phone position="start" />
                  ),
                }}
              />
              <Box mt={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  endIcon={<Send />}
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
