import React from 'react';
import { Typography, TextField, Button, Container, Box, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function CertificateVerification() {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{ minHeight: '100vh' }} // Full viewport height
      >
        <Grid item>
          <Typography variant="h4" gutterBottom align="center">
            Verify Your Certification ID
          </Typography>
        </Grid>
        <Grid item container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={8}>
            <TextField
              variant="outlined"
              fullWidth
              id="certificate-code"
              label="Enter Certificate Code"
              name="certificate-code"
              autoFocus
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              startIcon={<SearchIcon />}
              sx={{
                '&:hover': {
                  backgroundColor: '#2196f3',
                },
              }}
            >
              SEARCH
            </Button>
          </Grid>
        </Grid>
        <Grid item width="100%" textAlign="center">
          <Box display="flex" justifyContent="center" alignItems="center">
            <VerifiedIcon sx={{ mr: 1 }} />
            <Typography variant="body1">
              Verified
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="body2" textAlign="center">
            Our ID verification helps ensure the integrity and trustworthiness of certificates,
            providing confidence in their authenticity and validity.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
