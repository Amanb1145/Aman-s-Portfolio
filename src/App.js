import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero.js';
import Expertise from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #F8F8F8;
  }

  @media screen and (max-width: 768px) {
    /* Style for smaller screens */
    .App {
      padding-top: 60px;
    }
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Expertise />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
