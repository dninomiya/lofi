import { onAuthStateChanged } from '@firebase/auth';
import { doc, onSnapshot, Unsubscribe } from '@firebase/firestore';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { auth, db } from '../firebase/client';
import { createUser } from '../services/UserService';
import { User } from '../types/User';

const AuthContext = createContext<User | null | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    let unsubscribeUser: Unsubscribe;

    return onAuthStateChanged(auth, (firebaseUser) => {
      unsubscribeUser?.();

      if (firebaseUser) {
        const ref = doc(db, `users/${firebaseUser.uid}`);
        unsubscribeUser = onSnapshot(ref, (result) => {
          if (result.exists()) {
            setUser(result.data() as User);
          } else {
            createUser(firebaseUser.uid);
          }
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
