"use client"
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link'; // Import Material-UI Link component
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, styled } from '@mui/material/styles';
import Image from 'next/image';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'Internship', href: '/internship' },
    { text: 'Certificate Verification', href: '/certificate-verification' },
    { text: 'Services', href: '/services' },
    { text: 'About', href: '/about' },
    { text: 'Contact Us', href: '/contact-us' },
  ];

  const MenuLink = styled(Link)(({ theme }) => ({
    color: 'white',
    textDecoration: 'none', 
    position: 'relative',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: '-2px',
      left: '0',
      backgroundColor: theme.palette.secondary.main,
      visibility: 'hidden',
      transition: 'all 0.3s ease-in-out',
    },
    '&:hover::after': {
      visibility: 'visible',
      width: '100%',
    },
  }));

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#1976d2', mb: 8 }}>
      <Toolbar>
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <Link href="/" passHref>
            <Box sx={{ borderRadius: '50%', overflow: 'hidden', width: 40, height: 40 }}>
                <Image src="/vashLogo.jpg" alt="Logo" width={40} height={40} />
              </Box>
            </Link>
          </Box>
        )}
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        )}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center', gap: 2 }}>
          {menuItems.map((item, index) => (
            <MenuLink key={index} href={item.href} underline="none" variant="body1">{item.text}</MenuLink>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton color="inherit" component="a" href="https://www.facebook.com" target="_blank">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" component="a" href="https://www.linkedin.com" target="_blank">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" component="a" href="https://www.instagram.com" target="_blank">
            <InstagramIcon />
          </IconButton>
        </Box>
        {isMobile && (
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
              <List>
                {menuItems.map((item, index) => (
                  <ListItem button component={Link} key={index} href={item.href} onClick={toggleDrawer(false)}>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
