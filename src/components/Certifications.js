import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { cert } from "../components/Contents.js";
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';

const CertificationsWrapper = styled.section`
  padding: 25px;
  width: 100%;
  text-align: center;
  background-color: orange;
`;

const CertificateTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const CertificationItem = styled.div`
  display: inline-block;
  margin: 10px;
  cursor: pointer;

  img {
    width: 15em;
    height: 10em;
    object-fit: cover;
    border-radius: 5px;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) { /* Tablets */
    img {
      width: 12em;
      height: 8em;
    }
  }

  @media (max-width: 768px) { /* Móviles en orientación vertical */
    img {
      width: 10em;
      height: 7em;
    }
  }

  @media (max-width: 480px) { /* Móviles pequeños */
    img {
      width: 90%;
      height: auto;
    }
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

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
`;

const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedPreview, setUpdatedPreview] = useState('');
  const [updatedUrl, setUpdatedUrl] = useState('');
  const [user, setUser] = useState(null);

  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    // Check if a user is logged in
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setUpdatedName(cert.name);
    setUpdatedPreview(cert.preview);
    setUpdatedUrl(cert.url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
    setIsEditing(false);
  };

  const handleSave = async () => {
    if (selectedCert && user) {
      try {
        const certDoc = doc(db, 'certificates', selectedCert.id); // Assumes each certificate has a unique `id`
        await updateDoc(certDoc, {
          name: updatedName,
          preview: updatedPreview,
          url: updatedUrl,
        });
        alert('Certificate updated successfully!');
        closeModal();
      } catch (error) {
        console.error('Error updating certificate:', error);
        alert('Failed to update certificate.');
      }
    } else {
      alert('You must be logged in to edit.');
    }
  };

  return (
    <CertificationsWrapper id="certifications">
      <CertificateTitle>Certificates</CertificateTitle>
      <div>
        {cert && Array.isArray(cert) && cert.map((cert, index) => (
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
          ariaHideApp={false}
        >
          <button onClick={closeModal}>Cerrar</button>
          {isEditing ? (
            <div>
              <input
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
                placeholder="Certificate Name"
              />
              <input
                type="text"
                value={updatedPreview}
                onChange={(e) => setUpdatedPreview(e.target.value)}
                placeholder="Preview URL"
              />
              <input
                type="text"
                value={updatedUrl}
                onChange={(e) => setUpdatedUrl(e.target.value)}
                placeholder="Certificate URL"
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          ) : (
            <div>
              <ModalImage src={selectedCert.url} alt={selectedCert.name} />
              {user && (
                <button onClick={() => setIsEditing(true)}>Edit</button>
              )}
            </div>
          )}
        </Modal>
      )}
    </CertificationsWrapper>
  );
};

export default Certifications;
