import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.section`
  padding: 100px 50px;
  background-color: #F5F5F5;
`;

const PortfolioTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 50px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const PortfolioItem = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  &:hover .overlay {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover img {
    transform: scale(1.05);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4);
  }
`;

const PortfolioImage = styled.img`
  width: 100%;
  transition: all 0.3s ease;
`;

const PortfolioOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.3s ease;
  transform: translateY(100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PortfolioTitleOverlay = styled.h3`
  font-size: 1.5rem;
  color: #FFFFFF;
  text-align: center;
`;

function Portfolio() {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioTitle>My Portfolio</PortfolioTitle>
      <PortfolioGrid>
        <PortfolioItem>
          <PortfolioImage src="https://videowikistorage.blob.core.windows.net/cast-dev-db/vw1.png" alt="Project 1" />
          <PortfolioOverlay className="overlay">
            <PortfolioTitleOverlay>VideoWIki</PortfolioTitleOverlay>
          </PortfolioOverlay>
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioImage src="https://videowikistorage.blob.core.windows.net/cast-dev-db/vwc.png" alt="Project 2" />
          <PortfolioOverlay className="overlay">
            <PortfolioTitleOverlay>VideoWiki Cast</PortfolioTitleOverlay>
          </PortfolioOverlay>
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioImage src="https://videowikistorage.blob.core.windows.net/cast-dev-db/vwr.png" alt="Project 3" />
          <PortfolioOverlay className="overlay">
            <PortfolioTitleOverlay>VideoWiki Room</PortfolioTitleOverlay>
          </PortfolioOverlay>
        </PortfolioItem>
      </PortfolioGrid>
    </PortfolioContainer>
  );
}

export default Portfolio;
