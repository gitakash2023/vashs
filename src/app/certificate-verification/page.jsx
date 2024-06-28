"use client"
import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Box, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VerifiedIcon from '@mui/icons-material/Verified';
import ErrorIcon from '@mui/icons-material/Error';

const dummyData = [
  { code: 'CERT123', name: 'John Doe', course: 'React Basics', status: 'Verified' },
  { code: 'CERT456', name: 'Jane Smith', course: 'Advanced React', status: 'Verified' },
  { code: 'CERT789', name: 'Amit Kumar', course: 'Python for Data Science', status: 'Verified' },
  { code: 'CERT101', name: 'Priya Sharma', course: 'Machine Learning', status: 'Verified' },
  { code: 'CERT102', name: 'Ravi Verma', course: 'Deep Learning', status: 'Verified' },
  { code: 'CERT103', name: 'Neha Gupta', course: 'Web Development', status: 'Verified' },
  { code: 'CERT104', name: 'Rahul Singh', course: 'DevOps Essentials', status: 'Verified' },
  { code: 'CERT105', name: 'Anjali Mehta', course: 'Cloud Computing', status: 'Verified' },
  { code: 'CERT106', name: 'Vikram Patel', course: 'Cyber Security', status: 'Verified' },
  { code: 'CERT107', name: 'Sita Iyer', course: 'Blockchain Basics', status: 'Verified' },
  { code: 'CERT108', name: 'Rajesh Nair', course: 'AI for Everyone', status: 'Verified' },
  { code: 'CERT109', name: 'Pooja Desai', course: 'Big Data Analytics', status: 'Verified' },
];


export default function CertificateVerification() {
  const [certificateCode, setCertificateCode] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const result = dummyData.find(item => item.code === certificateCode);
    setVerificationResult(result);
    setSearched(true);
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{ minHeight: '100vh' }} 
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
              value={certificateCode}
              onChange={(e) => setCertificateCode(e.target.value)}
              autoFocus
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              startIcon={<SearchIcon />}
              onClick={handleSearch}
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
          {searched && (
            verificationResult ? (
              <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <VerifiedIcon sx={{ mr: 1 }} />
                <Typography variant="body1" color="primary">
                  Certificate for {verificationResult.name} ({verificationResult.course}) is {verificationResult.status}.
                </Typography>
              </Box>
            ) : (
              <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <ErrorIcon sx={{ mr: 1 }} color="error" />
                <Typography variant="body1" color="error">
                  Certificate not found.
                </Typography>
              </Box>
            )
          )}
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
