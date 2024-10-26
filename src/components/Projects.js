// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import { projects } from "../components/Contents.js";

const ProjectsWrapper = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #f0f0f0;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const ProjectCard = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 250px;
  height: 250px;
  justify-content: center;
  margin: 20px;
  object-fit: fill;
`;

const ProjectContent = styled.div`
  padding: 15px;
`;

const ProjectName = styled.h3`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
`;

const ProjectLink = styled.a`
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
  return (
    <ProjectsWrapper id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.preview} alt={project.name} />
            <ProjectContent>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink href={project.url} target="_blank" rel="noopener noreferrer">
                View Project
              </ProjectLink>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
