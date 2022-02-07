import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyCc478GVD0tcVcw8kpWS1E3nwEDGXE_5bg',
  authDomain: 'lofi-c845f.firebaseapp.com',
  databaseURL:
    'https://lofi-c845f-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'lofi-c845f',
  storageBucket: 'lofi-c845f.appspot.com',
  messagingSenderId: '25098880734',
  appId: '1:25098880734:web:7dc6442522b7fe37aa644f',
  measurementId: 'G-WGFZEC7GNN',
};

if (!getApps()?.length) {
  initializeApp(firebaseConfig);
}

const analytics = getAnalytics();
export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();
export const rtDB = getDatabase();
