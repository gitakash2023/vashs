"use client"
import React, { useState } from 'react';
import {
  Box, Card, CardContent, CardActions, Button, Typography, Grid
} from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import ApplicationForm from '../components/ApplicationForm'; // Adjust the path based on your actual project structure

const Internship = () => {
  const [open, setOpen] = useState(false);
  const [formTitle, setFormTitle] = useState('');

  const handleClickOpen = (title) => {
    setFormTitle(title);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const internships = [
    {
      title: 'Web Development',
      description: 'Join our Web Development internship and get hands-on experience with:',
      skills: [
        'Front-end: HTML, CSS, JavaScript, React, Next.js',
        'Back-end: Node.js, Express, Django',
        'State Management: Redux, Zustand',
        'Databases: MySQL, PostgreSQL, MongoDB',
        'Version Control: Git, GitHub'
      ],
      icon: <WebIcon sx={{ fontSize: 40, mb: 2 }} />,
    },
    {
      title: 'App Development',
      description: 'Join our App Development internship and master the skills required for:',
      skills: [
        'Cross-Platform Development: React Native, Flutter',
        'Back-end: Node.js, Express, Django',
        'State Management: Redux, Zustand',
        'Other Tools: Firebase, Google Maps, Payment Gateway Integration',
        'Version Control: Git, GitHub'
      ],
      icon: <MobileFriendlyIcon sx={{ fontSize: 40, mb: 2 }} />,
    }
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
        Internship Opportunities
      </Typography>
      <Grid container spacing={2}>
        {internships.map((internship, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ boxShadow: 4, height: '100%' }}>
              <CardContent>
                {internship.icon}
                <Typography variant="h5">{internship.title}</Typography>
                <Typography variant="body2" color="text.secondary">{internship.description}</Typography>
                <ul>
                  {internship.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
                <Typography variant="body2" color="text.secondary">
                  Learn how to build responsive and dynamic  applications from scratch, integrate third-party APIs, and deploy your projects .
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" onClick={() => handleClickOpen(`${internship.title} Application`)}>
                  Apply
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <ApplicationForm open={open} onClose={handleClose} title={formTitle} />
    </Box>
  );
};

export default Internship;
