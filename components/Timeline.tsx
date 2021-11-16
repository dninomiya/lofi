import { onSnapshot } from '@firebase/firestore';
import { differenceInSeconds, formatDistanceToNowStrict } from 'date-fns';
import { ja } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { useAuth } from '../providers/AuthProvider';
import { getMessagesQuery } from '../services/RoomService';
import { Message } from '../types/Message';

const Timeline = () => {
  const user = useAuth();
  const [messages, setMessages] = useState<Message[]>();
  const [playMessageSound] = useSound('/sounds/message.mp3');

  useEffect(() => {
    if (!user?.uid || !playMessageSound) {
      return;
    }

    return onSnapshot(getMessagesQuery('xxx'), (snapshot) => {
      console.log('fetched');
      const items = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        } as Message;
      });
      setMessages(items);

      const latestMessage = items?.[0];

      if (
        latestMessage?.createdAt &&
        differenceInSeconds(new Date(), latestMessage?.createdAt) < 3 &&
        latestMessage?.uid !== user.uid
      ) {
        playMessageSound();
      }
    });
  }, [playMessageSound, user?.uid]);

  return (
    <div className="flex-1 overflow-auto">
      {messages?.length ? (
        <ul>
          {messages?.map((message) => (
            <li key={message.id} className="flex">
              <span className="mr-1">😽</span>
              <div className="flex-1 overflow-hidden">
                <span className="break-words mr-2">{message.body}</span>
                <span className="text-xs opacity-50">
                  {formatDistanceToNowStrict(message.createdAt, {
                    addSuffix: true,
                    locale: ja,
                  })}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Empty...😴</p>
      )}
    </div>
  );
};

export default Timeline;
