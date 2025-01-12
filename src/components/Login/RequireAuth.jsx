import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/Context';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkUserRole = async () => {
      if (currentUser) {
        const db = getFirestore();
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists() && userDoc.data().role === 'admin') {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      } else {
        setIsAuthorized(false);
      }
      setIsLoading(false);
    };

    checkUserRole();
  }, [currentUser]);

  if (isLoading) {
    return <div>Loading...</div>; // Puedes personalizar el indicador de carga
  }

  if (!isAuthorized) {
    navigate('/login'); // Redirige a la página de login si no está autorizado
    return null;
  }

  return children;
};

export default RequireAuth;
