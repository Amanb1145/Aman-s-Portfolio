import React from 'react';
import styled, { keyframes } from 'styled-components';

const HeroContainer = styled.section`
  background-image: url('https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 2rem;
  animation: ${keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  `} 2s linear infinite;
`;

const HeroButton = styled.a`
  border: none;
  border-radius: 5px;
  background-color: #E54B4B;
  color: #FFFFFF;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #C64444;
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroTitle>Welcome to My Portfolio</HeroTitle>
      <HeroButton href="#about">Learn More</HeroButton>
    </HeroContainer>
  );
}

export default Hero;
