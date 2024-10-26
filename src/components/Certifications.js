import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import {cert} from "../components/Contents.js";

const CertificationsWrapper = styled.section`
  padding: 20px;
  text-align: center;
`;

const CertificationItem = styled.div`
  display: inline-block;
  margin: 10px;
  cursor: pointer;

  img {
    width: 150px;
    height: auto;
    border-radius: 5px;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }
`;

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%',
    maxHeight: '90%',
    overflow: 'auto',
  },
};

const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <CertificationsWrapper>
      <h2>Certifications</h2>
      <div>
        {cert.map((cert, index) => (
          <CertificationItem key={index} onClick={() => openModal(cert)}>
            <img src={cert.preview} alt={cert.name} />
            <p>{cert.name}</p>
          </CertificationItem>
        ))}
      </div>

      {selectedCert && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Vista de Certificación"
          style={modalStyles}
          ariaHideApp={false}  // Añade esto si tienes problemas con el modal en desarrollo
        >
          <button onClick={closeModal}>Close</button>
          <img src={selectedCert.url} alt={selectedCert.name} style={{ width: '100%' }} />
        </Modal>
      )}
    </CertificationsWrapper>
  );
};

export default Certifications;
