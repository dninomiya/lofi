import { collection, onSnapshot, query, where } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/client';

const OnlineStatus = () => {
  const [onlineUsers, setOnlineUsers] = useState<any>();

  useEffect(() => {
    const statusRef = collection(db, 'status');
    const q = query(statusRef, where('state', '==', 'online'));
    return onSnapshot(q, (snapshot) => {
      setOnlineUsers(snapshot.docs?.map((snap) => snap.data()));
    });
  }, []);

  return (
    <div>
      <p>
        <span className="emoji">👤</span>
        {onlineUsers?.length || 0}/4
      </p>
    </div>
  );
};

export default OnlineStatus;
