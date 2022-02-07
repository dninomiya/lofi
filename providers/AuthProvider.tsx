import { onAuthStateChanged } from '@firebase/auth';
import { onDisconnect, onValue, ref, set } from '@firebase/database';
import { doc, setDoc, onSnapshot, Unsubscribe } from '@firebase/firestore';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { auth, db, rtDB } from '../firebase/client';
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

  useEffect(() => {
    if (user?.id) {
      const userStatusDatabaseRef = ref(rtDB, '/status/' + user?.id);
      const userStatusFirestoreRef = doc(db, '/status/' + user?.id);

      const isOfflineStatus = {
        state: 'offline',
        lastChanged: Date.now(),
      };

      const isOnlineStatus = {
        state: 'online',
        lastChanged: Date.now(),
      };

      const unsubscribe = onValue(ref(rtDB, '.info/connected'), (snapshot) => {
        if (snapshot.val() == false) {
          setDoc(userStatusFirestoreRef, isOfflineStatus);
          return;
        }

        return onDisconnect(userStatusDatabaseRef)
          .set(isOfflineStatus)
          .then(() => {
            set(userStatusDatabaseRef, isOnlineStatus);
            setDoc(userStatusFirestoreRef, isOnlineStatus);
          });
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user?.id]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
