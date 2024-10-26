// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  padding-left: 20%;
  padding-right: 20%;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ContactLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const MessageForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <ContactLinks>
          <ContactLink href="https://www.linkedin.com/in/walter-liendo-7204b854/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </ContactLink>
          <ContactLink href="https://github.com/Walter185" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </ContactLink>
          <ContactLink href="mailto:walter.liendo@gmail.com">
            <FaEnvelope />
          </ContactLink>
        </ContactLinks>
        <MessageForm>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea rows="4" placeholder="Your Message" required></Textarea>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </MessageForm>
      </FooterContent>
      <p>© 2024 Walter Liendo. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
