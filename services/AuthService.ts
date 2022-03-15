import { signInAnonymously, signOut } from '@firebase/auth';
import { auth } from '../firebase/client';
import { Site } from '../lib/site';
import toast from 'react-hot-toast';

export const login = () => {
  signInAnonymously(auth).then(() => {
    toast.success(`「${Site.title}」へようこそ！`, {
      icon: '👋🏻',
    });
  });
};

export const logout = () => {
  signOut(auth);
};
