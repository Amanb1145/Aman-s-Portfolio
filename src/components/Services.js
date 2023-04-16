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
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ServicesDescription = styled.p`
  font-size: 1.2rem;
  color: #555555;

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
          <ServicesDescription>As a skilled web developer, I am highly experienced in crafting bespoke, fully-responsive websites using cutting-edge technologies including Python, Django, React, and REST frameworks. My passion lies in creating websites that truly embody the essence of your brand and exceed your business objectives. I am committed to delivering sleek and sophisticated web solutions that will impress your audience and help you stand out from the competition.</ServicesDescription>
        </ServicesItem>
        <ServicesItem>
          <ServicesIcon icon={faCloud} />
          <ServicesName>Cloud Services</ServicesName>
          <ServicesDescription>As a skilled web developer, I can help you harness the full potential of cloud computing by deploying your applications on cutting-edge cloud platforms like AWS and Azure. My expertise in designing, developing, and deploying cloud-based applications ensures that your web solutions are not only secure, but also scalable and reliable. Let me help you achieve your business goals with innovative and efficient cloud solutions.



</ServicesDescription>
        </ServicesItem>
        <ServicesItem>
          <ServicesIcon icon={faTools} />
          <ServicesName>Post-Deployment Support</ServicesName>
          <ServicesDescription>Launching a new application can be a daunting task, but you don't have to worry about it with me. I offer comprehensive post-deployment support services to ensure that your application is functioning at its best and meeting your business objectives. With my ongoing maintenance, monitoring, and troubleshooting services, I'll keep your application running smoothly, so you can focus on growing your business. From updates and bug fixes to performance optimizations, I'll handle it all, so you don't have to. You can rest assured that your application is in good hands with me.



</ServicesDescription>
        </ServicesItem>
      </ServicesGrid>
    </ServicesContainer>
  );
}

export default Services;
