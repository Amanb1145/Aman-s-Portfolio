import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 100px 50px;
  background-color: #FFFFFF;
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
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
  padding: 15px 30px;
  margin: 10px;
  border-radius: 5px;
`;

function Skills() {
  return (
    <SkillsContainer id="skills">
      <SkillsTitle>Skills</SkillsTitle>
      <SkillsList>
        <SkillsItem>Python</SkillsItem>
        <SkillsItem>Django</SkillsItem>
        <SkillsItem>React</SkillsItem>
        <SkillsItem>REST framework</SkillsItem>
        <SkillsItem>AWS</SkillsItem>
        <SkillsItem>Azure</SkillsItem>
        <SkillsItem>Blockchain</SkillsItem>
      </SkillsList>
    </SkillsContainer>
  );
}

export default Skills;
