"use client"
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@mui/material';
import Image from 'next/image';

const items = [
  {
    imageUrl: "/img.jpg",
    title: "Slide 1",
    description: "This is the first slide."
  },
  {
    imageUrl: "/img.jpg",
    title: "Slide 2",
    description: "This is the second slide."
  },
  {
    imageUrl: "/img.jpg",
    title: "Slide 3",
    description: "This is the third slide."
  }
];

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      timeout={500}
      indicators={false}
      navButtonsAlwaysVisible={true}
    >
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
  );
};

const Item = ({ item }) => {
  return (
    <Paper style={{ position: 'relative', textAlign: 'center' }}>
      <div style={{ position: 'relative', width: '100%', height: '300px' }}>
        <Image src={item.imageUrl} alt={item.title} layout="fill" objectFit="cover" />
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
        <Typography variant="h4">{item.title}</Typography>
        <Typography variant="subtitle1">{item.description}</Typography>
      </div>
    </Paper>
  );
};

export default CarouselComponent;
