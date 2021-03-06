import {
  addDoc,
  collection,
  doc,
  where,
  getDoc,
  getDocs,
  orderBy,
  query,
  increment,
  onSnapshot,
  setDoc,
  updateDoc,
} from '@firebase/firestore';
import useSWR from 'swr';
import { db } from '../firebase/client';
import { Message } from '../types/Message';
import { Room } from '../types/Room';
import { User } from '../types/User';

export const createRoom = async (data: Room, user: User): Promise<string> => {
  const newRoomRef = doc(collection(db, 'rooms'));
  const room: Room = {
    ...data,
    rid: newRoomRef.id,
    createdAt: Date.now(),
    users: [user.id],
  };

  await setDoc(newRoomRef, {
    ...room,
    rid: newRoomRef.id,
    createdAt: Date.now(),
  });

  return newRoomRef.id;
};

export const getRoom = async (id: string) => {
  const roomDoc = doc(db, `rooms/${id}`);
  const { data } = await getDoc(roomDoc);
  return data;
};

export const addMessage = async (
  roomId: string,
  data: Pick<Message, 'name' | 'emoji' | 'body'>
) => {
  const messages = collection(db, `rooms/${roomId}/messages`);
  const message: Omit<Message, 'id'> = {
    ...data,
    createdAt: Date.now(),
  };
  return addDoc(messages, message);
};

export const addLike = (roomId: string, messageId: string) => {
  const docRef = doc(db, `rooms/${roomId}/messages/${messageId}`);
  return updateDoc(docRef, {
    likeCount: increment(1),
  });
};

export const getMessagesQuery = (roomId: string) => {
  const messages = collection(db, `rooms/${roomId}/messages`);
  return query(messages, orderBy('createdAt', 'desc'));
};

export const useRooms = () => {
  const { data } = useSWR<Room[]>('rooms', async () => {
    const ref = collection(db, 'rooms');
    const snap = await getDocs(ref);
    const docs = snap.docs.map((doc) => doc.data() as Room);

    return docs;
  });

  return data;
};

export const useRoom = (id?: string) => {
  const { data } = useSWR<Room>(id ? `rooms/${id}` : null, async () => {
    const ref = doc(db, `rooms/${id}`);
    const snap = await getDoc(ref);
    const room = snap.data() as Room;

    return room;
  });

  return data;
};

export const watchActiveUsers = (action: (users: User[]) => void) => {
  const activeUsersRef = collection(db, 'users');
  const q = query(
    activeUsersRef,
    where('online', '==', true),
    orderBy('startAt', 'asc')
  );
  return onSnapshot(q, async (snap) => {
    const users = snap.docs.map((doc) => doc.data() as User);
    action(users);
  });
};
