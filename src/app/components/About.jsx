"use client"
import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Business, School, Code } from '@mui/icons-material';
import FAQs from './FAQs';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Introduction Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          <Business color="primary" /> Our Mission
        </Typography>
        <Typography variant="body1">
          Our mission is to empower aspiring developers by providing them with hands-on experience and practical skills in web and app development. We believe in fostering a culture of learning and innovation, where every individual has the opportunity to grow and succeed.
        </Typography>
      </Paper>

      {/* Internship Program Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          <School color="primary" /> Internship Program
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our internship program offers students the chance to work on real-world projects under the guidance of experienced mentors. Participants will gain valuable insights into the software development lifecycle and build a strong foundation in programming languages and frameworks.
        </Typography>
        <List sx={{ mb: 2 }}>
          <ListItem>
            <ListItemText primary="Duration: 3 months" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Eligibility: Students pursuing a degree in computer science or related field" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Application process: Submit your resume and portfolio online" />
          </ListItem>
        </List>
      </Paper>

      {/* Technology Stack Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          <Code color="primary" /> Technology Stack
        </Typography>
        <Typography variant="body1" gutterBottom>
          At our company, we use the latest technologies and tools to deliver high-quality web and app solutions to our clients. Our technology stack includes:
        </Typography>
        <List sx={{ mb: 2 }}>
          <ListItem>
            <ListItemText primary="Frontend: React, Angular, Vue.js" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Backend: Node.js, Express, Django" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Database: MongoDB, MySQL, PostgreSQL" />
          </ListItem>
        </List>
      </Paper>

      {/* FAQs Section */}
      <Typography variant="h3" align="center" gutterBottom>
        FAQs
      </Typography>
      <FAQs />
    </Container>
  );
};

export default About;
