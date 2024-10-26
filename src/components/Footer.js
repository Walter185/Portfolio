// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { BsWhatsapp, BsEnvelopeAt } from 'react-icons/bs';
import Foto  from "../assets/img/walter.jpg";

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;
const Section = styled.section`
  margin-top: 50px;
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
  justify-content: center;
`;

const ContactLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;
const H2 = styled.h2`
    margin-top: 10px;
`; 
const Img = styled.img`
    width: 100px;
    border-radius: 50px;
`;


const Footer = () => {
  return (
    <FooterWrapper id='contact'>
      <FooterContent>
      <Section >
            <Img src={Foto} alt="Walter Liendo"/>
            <p style={{textAlign:"center"}}><b>Walter Liendo</b><br/>
            Fullstack Dev<br/>
            JavaScript/Python/React</p>
        </Section>
        <section style={{textAlign:"center"}}>
                <H2>CONTACT</H2>
                <p style={{textAlign:"center"}}><FiMapPin />  Guardia Vieja 3440 Piso 1° Apt "B" - CABA </p>
                <p style={{textAlign:"center"}}><BsWhatsapp />  (+54)91158465481</p>
                <p style={{textAlign:"center"}}><BsEnvelopeAt /> walter.liendo@gmail.com</p>
            </section>
            <section>
                <H2 style={{textAlign:"center"}}>SOCIAL MEDIA</H2>
             
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
            </section>
      </FooterContent>
      <p>© 2024 Walter Liendo. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
