import { onAuthStateChanged, User } from '@firebase/auth';
import { onDisconnect, onValue, ref, set } from '@firebase/database';
import { doc, setDoc } from '@firebase/firestore';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { auth, db, rtDB } from '../firebase/client';

const AuthContext = createContext<User | null | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    if (user?.uid) {
      const userStatusDatabaseRef = ref(rtDB, '/status/' + user?.uid);
      const userStatusFirestoreRef = doc(db, '/status/' + user?.uid);

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
  }, [user?.uid]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
