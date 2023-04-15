import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faCloud, faTools } from '@fortawesome/free-solid-svg-icons';

const ServicesContainer = styled.section`
  padding: 100px 50px;
  background-color: #FFFFFF;
`;

const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 50px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
`;

const ServicesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ServicesIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ServicesName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ServicesDescription = styled.p`
  font-size: 1.2rem;
  color: #888888;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesTitle>My Services</ServicesTitle>
      <ServicesGrid>
        <ServicesItem>
          <ServicesIcon icon={faLaptopCode} />
          <ServicesName>Web Development</ServicesName>
          <ServicesDescription>As a web developer, I specialize in creating custom, responsive websites using the latest web development technologies such as Python, Django, React, and REST frameworks. I can work with you to design and develop a website that reflects your brand and meets your business needs.</ServicesDescription>
        </ServicesItem>
        <ServicesItem>
          <ServicesIcon icon={faCloud} />
          <ServicesName>Cloud Services</ServicesName>
          <ServicesDescription>I can help you take advantage of the benefits of cloud computing by deploying your applications on cloud platforms like AWS and Azure. I have expertise in designing, developing, and deploying cloud-based applications that are secure, scalable, and reliable.</ServicesDescription>
        </ServicesItem>
        <ServicesItem>
          <ServicesIcon icon={faTools} />
          <ServicesName>Post-Deployment Support</ServicesName>
          <ServicesDescription>I understand that launching a new application can be daunting, which is why I offer post-deployment support services to ensure that your application is functioning properly and meeting your business objectives. I provide ongoing maintenance, monitoring, and troubleshooting services to keep your application running smoothly. Whether you need updates, bug fixes, or performance optimizations, I'm here to help.</ServicesDescription>
        </ServicesItem>
      </ServicesGrid>
    </ServicesContainer>
  );
}

export default Services;
