import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, YouTube } from '@mui/icons-material';

const footerLinks = [
  { title: 'About Us', url: '/about' },
  { title: 'Services', url: '/services' },
  { title: 'Contact Us', url: '/contact' },
  { title: 'Careers', url: '/careers' },
  { title: 'Blog', url: '/blog' },
  { title: 'Privacy Policy', url: '/privacy' },
  { title: 'Terms of Service', url: '/terms' },
  { title: 'Support', url: '/support' },
  { title: 'FAQs', url: '/faqs' },
  { title: 'Portfolio', url: '/portfolio' },
  { title: 'Testimonials', url: '/testimonials' },
  { title: 'Partnerships', url: '/partnerships' },
  { title: 'Sitemap', url: '/sitemap' },
  { title: 'Resources', url: '/resources' },
  { title: 'Events', url: '/events' },
  { title: 'Press', url: '/press' },
  { title: 'Developers', url: '/developers' },
  { title: 'Affiliate', url: '/affiliate' },
  { title: 'Investors', url: '/investors' },
  { title: 'Community', url: '/community' },
  { title: 'Home', url: '/' },
  { title: 'Our Team', url: '/team' },
  { title: 'Projects', url: '/projects' },
];

const socialMedia = [
  { icon: <Facebook />, url: 'https://www.facebook.com' },
  { icon: <Twitter />, url: 'https://www.twitter.com' },
  { icon: <LinkedIn />, url: 'https://www.linkedin.com' },
  { icon: <Instagram />, url: 'https://www.instagram.com' },
  { icon: <YouTube />, url: 'https://www.youtube.com' }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#1976d2', color: 'white', paddingTop: '40px', paddingBottom: '40px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {footerLinks.slice(0, 6).map((link) => (
                <li key={link.title}>
                  <Link href={link.url} color="inherit" style={{ textDecoration: 'none' }}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {footerLinks.slice(6, 12).map((link) => (
                <li key={link.title}>
                  <Link href={link.url} color="inherit" style={{ textDecoration: 'none' }}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {footerLinks.slice(12, 18).map((link) => (
                <li key={link.title}>
                  <Link href={link.url} color="inherit" style={{ textDecoration: 'none' }}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              More
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {footerLinks.slice(18, 24).map((link) => (
                <li key={link.title}>
                  <Link href={link.url} color="inherit" style={{ textDecoration: 'none' }}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            {socialMedia.map((social, index) => (
              <IconButton key={index} href={social.url} color="inherit">
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="inherit">
            &copy; {currentYear} My Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
