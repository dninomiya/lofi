import { onSnapshot } from '@firebase/firestore';
import { formatDistanceToNowStrict } from 'date-fns';
import { ja } from 'date-fns/locale';
import { Emoji } from 'emoji-mart';
import { useEffect, useState } from 'react';
import Linkify from 'react-linkify';
import { useAuth } from '../providers/AuthProvider';
import { addLike, getMessagesQuery } from '../services/RoomService';
import { Message } from '../types/Message';
import { classNames } from '../utils/classNames';

const Timeline = () => {
  const [messages, setMessages] = useState<Message[]>();
  const user = useAuth();

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
              <div className="flex gap-4">
                <p className="break-words flex-1">
                  <Linkify>{message.body}</Linkify>
                </p>
                <button
                  onClick={() => {
                    if (user) {
                      addLike('global', message.id);
                    } else {
                      alert('ログインしてね');
                    }
                  }}
                  className={classNames(
                    'text-sm whitespace-nowrap text-gray-500',
                    !message.likeCount && 'opacity-40'
                  )}
                >
                  ☕️ {message.likeCount?.toLocaleString()}
                </button>
              </div>
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
