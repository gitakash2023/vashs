import React from 'react';
import { Box, Card, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';

const Internship = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" component="div" sx={{ mb: 4, textAlign: 'center' }}>
        Internship Opportunities
      </Typography>

      <Grid container spacing={2}>
        {/* Web Development Card */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <WebIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" component="div">
                Web Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Join our Web Development internship and get hands-on experience with:
              </Typography>
              <ul>
                <li>Front-end: HTML, CSS, JavaScript, React, Angular, Vue.js</li>
                <li>Back-end: Node.js, Express, Django, Ruby on Rails</li>
                <li>Databases: MySQL, PostgreSQL, MongoDB</li>
                <li>Version Control: Git, GitHub</li>
                <li>Web Hosting: AWS, Heroku, Netlify</li>
                <li>Other Tools: Webpack, Babel, Docker, REST APIs, GraphQL</li>
              </ul>
              <Typography variant="body2" color="text.secondary">
                Learn how to build responsive and dynamic web applications from scratch, integrate third-party APIs, and deploy your projects to the cloud.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                Apply
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* App Development Card */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <MobileFriendlyIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" component="div">
                App Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Join our App Development internship and master the skills required for:
              </Typography>
              <ul>
                <li>Cross-Platform Development: React Native, Flutter</li>
                <li>Native Development: Swift (iOS), Kotlin/Java (Android)</li>
                <li>State Management: Redux, MobX, Provider</li>
                <li>APIs: REST, GraphQL</li>
                <li>Testing: Jest, Detox, Appium</li>
                <li>CI/CD: Fastlane, Bitrise, GitHub Actions</li>
                <li>Other Tools: Firebase, Google Maps, Payment Gateway Integration</li>
              </ul>
              <Typography variant="body2" color="text.secondary">
                Learn how to design, build, and deploy mobile applications, implement third-party services, and ensure a smooth user experience.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                Apply
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Internship;
