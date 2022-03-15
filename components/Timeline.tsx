import { onSnapshot } from '@firebase/firestore';
import { formatDistanceToNowStrict } from 'date-fns';
import { ja } from 'date-fns/locale';
import { Emoji } from 'emoji-mart';
import { useEffect, useState } from 'react';
import Linkify from 'react-linkify';
import { getMessagesQuery } from '../services/RoomService';
import { Message } from '../types/Message';

const Timeline = () => {
  const [messages, setMessages] = useState<Message[]>();

  useEffect(() => {
    return onSnapshot(getMessagesQuery('global'), (snapshot) => {
      const items = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        } as Message;
      });
      setMessages(items);
    });
  }, []);

  if (messages === undefined) {
    return null;
  }

  return (
    <div className="flex-1 overflow-auto">
      {messages?.length ? (
        <ul className="space-y-4">
          {messages?.map((message) => (
            <li key={message.id}>
              <p className="break-words">
                <Linkify>{message.body}</Linkify>
              </p>
              {message.emoji && message.name && (
                <p className="flex mt-1 items-center space-x-1 flex-wrap text-xs opacity-60">
                  <Emoji native size={16} emoji={message.emoji} />
                  <span>{message.name}</span>
                  <span>
                    {formatDistanceToNowStrict(message.createdAt, {
                      addSuffix: true,
                      locale: ja,
                    })}
                  </span>
                </p>
              )}
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
