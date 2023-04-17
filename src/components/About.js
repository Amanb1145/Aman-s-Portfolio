import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaInstagram, FaMedium } from 'react-icons/fa';

const AboutContainer = styled.section`
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #FFFFFF;


  @media (max-width: 768px) {
    padding: 100px 20px;
  }

  @media (max-width: 480px) {
    padding: 80px 10px;
  }
`;

const AboutImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 100px; /* updated margin */
  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

const AboutContent = styled.div`
  flex: 1;
  text-align: justify;
  margin-left: 70px;
  max-width: 600px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 30px;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem; /* reduced margin */
`;


const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: #555555;;
`;



const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin-top: 30px; /* reduced margin */
  margin-bottom: 30px; /* added margin */
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px; /* reduced margin */
  }
`;


const ProfilePicture = 'https://videowikistorage.blob.core.windows.net/cast-dev-db/WhatsApp Image 2023-04-16 at 1.09.00 AM.jpeg';
const ProfileDescription = 'Hello, I am Aman Bishnoi, a passionate web developer with a proven track record of building custom, responsive websites using the latest web development technologies such as Python, Django, React, and REST framework. I specialize in developing scalable and efficient web solutions that help businesses achieve their goals. Currently, I am working as a tech lead at VideoWiki, where I lead a team of developers and work closely with stakeholders to deliver innovative and effective solutions. At VideoWiki, I leverage my expertise in cloud platforms like AWS and Azure to create high-performing web applications. In my free time, I love to explore new hiking trails, read books on technology, and experiment with emerging technologies to stay ahead of the curve.';

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const SocialLink = styled.a`
font-size: 1.5rem;
margin: 0 10px;
color: #555555;

&:hover {
  color: #0077b5; /* added property */
}
`;

function About() {
  return (
    <AboutContainer id="about">
      <AboutTitle>About Me</AboutTitle>
      <AboutWrapper>
        <AboutContent>
          <AboutText>{ProfileDescription}</AboutText>
          <SocialContainer>
            <SocialLink href="https://www.linkedin.com/in/aman-j-bishnoi/" target="_blank"><FaLinkedin /></SocialLink>
            <SocialLink href="https://www.instagram.com/amanb1145/" target="_blank"><FaInstagram /></SocialLink>
            <SocialLink href="https://medium.com/@amanb1145" target="_blank"><FaMedium /></SocialLink>
          </SocialContainer>
        </AboutContent>
        <AboutImg src={ProfilePicture} alt="Profile Picture of ChatGPT" />
      </AboutWrapper>
    </AboutContainer>
  );
}

export default About;