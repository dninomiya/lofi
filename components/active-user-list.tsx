import {
  formatDistanceToNowStrict,
  formatDuration,
  intervalToDuration,
} from 'date-fns';
import { ja } from 'date-fns/locale';
import { Emoji } from 'emoji-mart';
import React, { useEffect, useState } from 'react';
import { User } from '../types/User';

type Props = {
  users?: User[];
};

const ActiveUserList = ({ users }: Props) => {
  const [time, setTime] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((v) => v + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getDuration = (start: number) => {
    const duration = intervalToDuration({
      start,
      end: Date.now(),
    });

    return (
      (formatDuration(duration, {
        locale: ja,
        delimiter: '',
      }) || '0秒') + '経過'
    );
  };

  if (!users?.length) {
    return null;
  }

  return (
    <ul className="space-y-2 hidden lg:block">
      {users.map((user) => {
        return (
          <li key={user.id}>
            <p className="text-sm">
              <Emoji size={13} emoji={user.emoji} native /> {user.name}
            </p>
            <p className="text-xs opacity-40">
              {user.startAt && getDuration(user.startAt)}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ActiveUserList;
