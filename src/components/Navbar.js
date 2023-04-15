import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 50px;
  background-color: #FFFFFF;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

const NavLogo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: #E54B4B;
  text-decoration: none;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 20px;
`;

const NavLink = styled.a`
  font-size: 1.2rem;
  color: #555555;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #E54B4B;
  }
`;

function Navbar() {
  return (
    <NavContainer>
      <NavLogo href="/">Aman Bishnoi</NavLogo>
      <NavMenu>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#skills">Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#services">Services</NavLink>
        </NavItem>
      </NavMenu>
    </NavContainer>
  );
}

export default Navbar;
