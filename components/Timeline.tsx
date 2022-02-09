import { onSnapshot } from '@firebase/firestore';
import { differenceInSeconds, formatDistanceToNowStrict } from 'date-fns';
import { ja } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { useAuth } from '../providers/AuthProvider';
import { getMessagesQuery } from '../services/RoomService';
import { Message } from '../types/Message';
import Linkify from 'react-linkify';
import { useRouter } from 'next/dist/client/router';
import { Room } from '../types/Room';

type Props = {
  room: Room;
};

const Timeline = ({ room }: Props) => {
  const user = useAuth();
  const [messages, setMessages] = useState<Message[]>();
  const [playMessageSound] = useSound('/sounds/message.mp3');
  const router = useRouter();

  useEffect(() => {
    if (!user?.id || !playMessageSound || !router.query.id) {
      return;
    }

    return onSnapshot(
      getMessagesQuery(router.query.id as string),
      (snapshot) => {
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
          latestMessage?.uid !== user.id
        ) {
          playMessageSound();
        }
      }
    );
  }, [playMessageSound, user?.id, router.query.id]);

  // const getRoomUser = (id: string) => {
  //   const user = room.users.find((user) => user.id === id);
  //   return user;
  // };

  return (
    <div className="flex-1 overflow-auto">
      {messages?.length ? (
        <ul>
          {messages?.map((message) => (
            <li key={message.id} className="flex">
              {/* <span className="mr-1">{getRoomUser(message.uid)?.emoji}</span> */}
              <div className="flex-1 overflow-hidden">
                <span className="break-words mr-2">
                  <Linkify>{message.body}</Linkify>
                </span>
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
