import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #FFFFFF;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #E54B4B;

  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const FooterLogo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: #E54B4B;
  text-decoration: none;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

const FooterLink = styled.a`
  font-size: 1.2rem;
  color: #E54B4B;
  text-decoration: none;
  margin: 0 20px;
  transition: all 0.3s ease;

  &:hover {
    color: #555555;
  }

  @media screen and (max-width: 768px) {
    margin: 5px;
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const FooterPhone = styled.span`
  font-size: 1.2rem;
  color: #E54B4B;
  margin: 0 20px;

  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
`;

function Footer() {
    return (
      <FooterContainer>
        <FooterLogo href="/">Aman Bishnoi</FooterLogo>
        <FooterLinks>
          <FooterLink href="mailto:amanb1145@gmail.com">amanb1145@gmail.com</FooterLink>
          <FooterLink href="https://www.linkedin.com/in/aman-j-bishnoi/">LinkedIn</FooterLink>
          <FooterPhone>+91 88821-62052</FooterPhone>
        </FooterLinks>
        <FooterText>© 2023 Aman Bishnoi. All rights reserved.</FooterText>
      </FooterContainer>
    );
  }

export default Footer;
