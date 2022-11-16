import { createContext, useState, useEffect, useContext, useMemo } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
  signUp: async () => {},
  signIn: async () => {},
  logout: async () => {},
  user: null,
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigate('/');
      }
    });
  }, [auth]);

  const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate('/home');
      })
      .catch((error) => alert(error.message));
  };

  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate('/home');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const logout = async () => {
    signOut(auth).then(() => setUser(null));
  };

  const memoedValue = useMemo(() => ({ user, signUp, signIn, logout }), [user]);

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
