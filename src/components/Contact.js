import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faServer, faCubes } from '@fortawesome/free-solid-svg-icons';
import { faDocker } from '@fortawesome/free-brands-svg-icons/faDocker';
import { faGripfire } from '@fortawesome/free-brands-svg-icons/faGripfire';
import { faGem } from '@fortawesome/free-solid-svg-icons/faGem';
import { faCube } from '@fortawesome/free-solid-svg-icons/faCube';


const SkillsContainer = styled.section`
  padding: 100px 50px;
  background-color: #FFFFFF;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillsItem = styled.li`
  font-size: 1.2rem;
  color: #555555;
  background-color: #F3F3F3;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 15px;
    margin: 5px;
  }
`;

function Skills() {
  return (
    <SkillsContainer id="skills">
      <SkillsTitle>Skills</SkillsTitle>
      <SkillsList>
        <SkillsItem>
          <FontAwesomeIcon icon={faPython} /> Python
        </SkillsItem>
        <SkillsItem>
          <FontAwesomeIcon icon={faServer} /> Django
        </SkillsItem>
        <SkillsItem>
          <FontAwesomeIcon icon={faReact} /> React
        </SkillsItem>
        <SkillsItem>
          <FontAwesomeIcon icon={faCube} /> REST Framework
        </SkillsItem>
        <SkillsItem>
          <FontAwesomeIcon icon={faGripfire} /> AWS
        </SkillsItem>
        <SkillsItem>
          <FontAwesomeIcon icon={faCubes} /> Azure
        </SkillsItem>
        <SkillsItem>
          <FontAwesomeIcon icon={faGem} /> Blockchain
        </SkillsItem>
        <SkillsItem>
          <FontAwesomeIcon icon={faDocker} /> Docker
        </SkillsItem>
      </SkillsList>
    </SkillsContainer>
  );
}

export default Skills;
