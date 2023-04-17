import React from 'react';
import styled from 'styled-components';
import { FaPython, FaReact, FaAws, FaDocker, FaFigma } from 'react-icons/fa';
import { SiBlockchaindotcom, SiDjango, SiMicrosoftazure } from 'react-icons/si'
import { TbBrandDjango } from 'react-icons/tb'

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
          <FaPython /> <span>Python</span>
        </SkillsItem>
        <SkillsItem>
          <SiDjango /> <span>Django</span>
        </SkillsItem>
        <SkillsItem>
          <FaReact /> <span>React</span>
        </SkillsItem>
        <SkillsItem>
          <TbBrandDjango /> <span>REST Framework</span>
        </SkillsItem>
        <SkillsItem>
          <FaAws /> <span>AWS</span>
        </SkillsItem>
        <SkillsItem>
          <SiMicrosoftazure /> <span>Azure</span>
        </SkillsItem>
        <SkillsItem>
          <SiBlockchaindotcom /> <span>Blockchain</span>
        </SkillsItem>
        <SkillsItem>
          <FaDocker /> <span>Docker</span>
        </SkillsItem>
        <SkillsItem>
          <FaFigma /> <span>Figma</span>
        </SkillsItem>
      </SkillsList>
    </SkillsContainer>
  );
}

export default Skills;
