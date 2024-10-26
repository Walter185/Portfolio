// src/components/Presentation.js
import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const PresentationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  text-align: center;
  background-image: url('/img/wallpaper.jpg'); /* URL de la imagen de fondo */
  background-attachment: fixed; /* Efecto parallax */
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;

const Button = styled(ScrollLink)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Presentation = () => {
  return (
    <PresentationWrapper id="presentation">
      <Title>Walter Liendo</Title>
      <Subtitle>Fullstack Developer</Subtitle>
      <Button to="certifications" smooth={true} duration={500}>
        Go to Certifications
      </Button>
    </PresentationWrapper>
  );
};

export default Presentation;
