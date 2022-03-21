import { signOut, TwitterAuthProvider, signInWithPopup } from '@firebase/auth';
import toast from 'react-hot-toast';
import { auth } from '../firebase/client';
import { Site } from '../lib/site';

export const login = () => {
  const provider = new TwitterAuthProvider();
  signInWithPopup(auth, provider).then(() => {
    toast.success(`「${Site.title}」へようこそ！`, {
      icon: '👋🏻',
    });
  });
};

export const logout = () => {
  signOut(auth);
};
