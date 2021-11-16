import { signInAnonymously, signOut } from '@firebase/auth';
import { auth } from '../firebase/client';

export const login = () => {
  signInAnonymously(auth);
};

export const logout = () => {
  signOut(auth);
};
