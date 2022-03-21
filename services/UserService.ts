import { addDays, format, formatDuration, intervalToDuration } from 'date-fns';
import { ja } from 'date-fns/locale';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/client';
import { User } from '../types/User';
const randomEmoji = require('random-unicode-emoji');
const unicode = require('emoji-unicode-map');

export const createUser = (id: string) => {
  const ref = doc(db, `users/${id}`);

  return setDoc(ref, {
    id,
    name: 'noname',
    createdAt: Date.now(),
    lastLoggedInAt: Date.now(),
    lv: 1,
    tomato: 0,
    emoji: 'bust_in_silhouette emoji',
    online: false,
    totalWorkTime: 0,
    keepDays: 1,
  } as User);
};

export const updateUser = (id: string, data: Partial<User>) => {
  const ref = doc(db, `users/${id}`);
  return updateDoc(ref, data);
};

export const getGraceTimeToExpulsion = (lastLoggedIn: number): string => {
  const limit = addDays(lastLoggedIn, 2);
  const duration = intervalToDuration({
    start: Date.now(),
    end: limit,
  });

  return formatDuration(duration, {
    locale: ja,
    format: ['days', 'hours', 'minutes', 'seconds'],
    delimiter: '',
  });
};
