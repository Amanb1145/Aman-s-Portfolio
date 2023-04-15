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
`;

const FooterLogo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: #E54B4B;
  text-decoration: none;
  margin-bottom: 20px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
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
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const FooterPhone = styled.span`
  font-size: 1.2rem;
  color: #E54B4B;
  margin: 0 20px;
`;

function Footer() {
    return (
      <FooterContainer>
        <FooterLogo href="/">Aman Bishnoi</FooterLogo>
        <FooterLinks>
          <FooterLink href="mailto:amanb1145@gmail.com">amanb1145@gmail.com</FooterLink>
          <FooterLink href="https://www.linkedin.com/in/yourlinkedin">LinkedIn</FooterLink>
          <FooterPhone>+91 88821-62052</FooterPhone>
        </FooterLinks>
        <FooterText>© 2023 Aman Bishnoi. All rights reserved.</FooterText>
      </FooterContainer>
    );
  }

export default Footer;
