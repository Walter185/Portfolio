// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';

const SkillsWrapper = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #f8f9fa;
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SkillCategory = styled.div`
  max-width: 400px;
  text-align: left;
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  color: #007bff;
  margin-bottom: 10px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  font-size: 1.2rem;
  color: #555;
  padding: 5px 0;
`;

const Skills = () => {
  return (
    <SkillsWrapper id="skills">
      <SkillsTitle>Skills</SkillsTitle>
      <SkillsContainer>
        <SkillCategory>
          <CategoryTitle>Technical Skills (Hard Skills)</CategoryTitle>
          <SkillList>
            <SkillItem>Web Development: React, JavaScript, HTML, CSS</SkillItem>
            <SkillItem>Database Management: Firebase, Firestore, MySQL</SkillItem>
            <SkillItem>Version Control: Git, GitHub</SkillItem>
            <SkillItem>RESTful API Development</SkillItem>
          </SkillList>
        </SkillCategory>
        
        <SkillCategory>
          <CategoryTitle>Personal Skills (Soft Skills)</CategoryTitle>
          <SkillList>
            <SkillItem>Effective Communication</SkillItem>
            <SkillItem>Problem Solving</SkillItem>
            <SkillItem>Teamwork</SkillItem>
            <SkillItem>Adaptability</SkillItem>
          </SkillList>
        </SkillCategory>
      </SkillsContainer>
    </SkillsWrapper>
  );
};

export default Skills;
