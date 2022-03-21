import { onAuthStateChanged } from '@firebase/auth';
import { doc, onSnapshot, Unsubscribe } from '@firebase/firestore';
import { onDisconnect, onValue, push, ref, set } from 'firebase/database';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { auth, db, rtDB } from '../firebase/client';
import { createUser, updateUser } from '../services/UserService';
import { User } from '../types/User';

const AuthContext = createContext<User | null | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  const connect = (id: string) => {
    const myConnectionsRef = ref(rtDB, `connectedUsers/${id}`);
    const connectedRef = ref(rtDB, '.info/connected');
    onValue(connectedRef, (snap) => {
      if (snap.val() === true) {
        const con = push(myConnectionsRef);
        onDisconnect(con).remove();
        set(con, true);
      }
    });
  };

  useEffect(() => {
    let unsubscribeUser: Unsubscribe;

    return onAuthStateChanged(auth, (firebaseUser) => {
      unsubscribeUser?.();

      if (firebaseUser) {
        const ref = doc(db, `users/${firebaseUser.uid}`);
        unsubscribeUser = onSnapshot(ref, async (result) => {
          if (result.exists()) {
            setUser(result.data() as User);
          } else {
            await createUser(firebaseUser.uid);
          }

          connect(firebaseUser.uid);
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    if (user && !user.online) {
      updateUser(user.id, {
        online: true,
        startAt: Date.now(),
      });
    }
  }, [user]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
