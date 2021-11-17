import { useEffect, useState } from 'react';
import { User } from '../types/User';
import MemberListItem from './MemberListItem';

const MemberList = () => {
  const [users, setUsers] = useState<User[]>([
    {
      name: 'たかし',
      lv: 2,
      exp: 430,
      task: '動画上げる',
      uid: 'xxx',
      emoji: '😽',
      isActive: true,
      lastLoggedInAt: Date.now(),
    },
    {
      name: 'ヨッシー',
      lv: 1,
      exp: 0,
      task: '寝てる',
      uid: 'bbb',
      emoji: '😇',
      isActive: false,
      lastLoggedInAt: new Date(2021, 10, 16).getTime(),
    },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setUsers((users) =>
        users.map((user) => {
          return {
            ...user,
            exp: user.isActive ? user.exp + 1 : user.exp,
          };
        })
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ul className="text-white space-y-2">
      {users.map((user) => {
        return (
          <li key={user.uid}>
            <MemberListItem user={user} />
          </li>
        );
      })}
    </ul>
  );
};

export default MemberList;
