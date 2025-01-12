import React from 'react';
import styled from 'styled-components';
import { projects } from "../components/Contents.js";

const ProjectsWrapper = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #f8f9fa;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const ProjectCard = styled.div`
  width: 260px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectImage = styled.img`
  width: 70%;
  height: auto;
  margin-top: 30px;
  object-fit: cover; /* Esto asegura que todas las imágenes se ajusten uniformemente */
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectName = styled.h3`
  font-size: 1.3rem;
  color: #0056b3;
  margin-bottom: 10px;
  text-align: center;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.5;
`;

const ProjectLink = styled.a`
  display: block;
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;

  &:hover {
    color: #0056b3;
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
            <ImageWrapper>
              <ProjectImage src={project.preview} alt={project.name} />
            </ImageWrapper>
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
