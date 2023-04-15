import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;

const AboutImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-left: 100px;
`;

const AboutContent = styled.div`
  max-width: 600px;
  text-align: justify;
  margin-right: 70px;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  width: 100%;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
`;

function About() {
  return (
    <AboutContainer id="about">
      <AboutTitle>About Me</AboutTitle>
      <AboutWrapper>
        <AboutContent>
          <AboutText>I am a web developer specializing in creating custom, responsive websites using the latest web development technologies such as Python, Django, React, and REST framework. I also have experience working with cloud platforms such as AWS and Azure, as well as blockchain technologies.</AboutText>
          <AboutText>In my free time, I enjoy hiking, reading, and experimenting with new technologies.</AboutText>
        </AboutContent>
        <AboutImg src="https://videowikistorage.blob.core.windows.net/cast-dev-db/WhatsApp Image 2023-04-16 at 1.09.00 AM.jpeg" alt="Profile Picture" />
      </AboutWrapper>
    </AboutContainer>
  );
}

export default About;
