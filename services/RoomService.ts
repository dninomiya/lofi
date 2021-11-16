import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  Query,
  query,
} from '@firebase/firestore';
import { db } from '../firebase/client';
import { Message } from '../types/Message';

export const createRoom = async () => {
  const roomCollection = collection(db, 'rooms');
  return addDoc(roomCollection, {
    title: 'test',
  });
};

export const getRoom = async (id: string) => {
  const roomDoc = doc(db, `rooms/${id}`);
  const { data } = await getDoc(roomDoc);
  return data;
};

export const addMessage = async (roomId: string, uid: string, body: string) => {
  const messages = collection(db, `rooms/${roomId}/messages`);
  const message: Omit<Message, 'id'> = {
    uid,
    body,
    createdAt: Date.now(),
  };
  return addDoc(messages, message);
};

export const getMessagesQuery = (roomId: string) => {
  const messages = collection(db, `rooms/${roomId}/messages`);
  return query(messages, orderBy('createdAt', 'desc'));
};
