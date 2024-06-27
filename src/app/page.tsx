import React from 'react';
import { Container, Box } from '@mui/material';
import CarouselComponent from "./components/CarouselComponent";
import About from './components/About';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import ImportantData from './components/ImportantData';
import WhyUs from './components/WhyUs';


function Home() {
  return (
    <Container maxWidth="lg">
      <Box mb={8}>
        <CarouselComponent />
      </Box>
      <Box mb={8}>
        <WhyUs />
      </Box>
      <Box mb={8}>
        <About />
      </Box>
      <Box mb={8}>
      <ImportantData/>
      </Box>
      <Box mb={8}>
        <Services />
      </Box>
      
    </Container>
  );
}

export default Home;
