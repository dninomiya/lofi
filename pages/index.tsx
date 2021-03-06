import { doc, onSnapshot } from 'firebase/firestore';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ActiveUserList from '../components/active-user-list';
import Clock from '../components/Clock';
import MessageForm from '../components/MessageForm';
import Timeline from '../components/Timeline';
import UserProfile from '../components/UserProfileEditor';
import YouTubeControler from '../components/YouTubeControler';
import YouTubePlayer from '../components/YouTubePlayer';
import { db } from '../firebase/client';
import { Site } from '../lib/site';
import { useAuth } from '../providers/AuthProvider';
import { login } from '../services/AuthService';
import { watchActiveUsers } from '../services/RoomService';
import { User } from '../types/User';
import { classNames } from '../utils/classNames';

const Home: NextPage = () => {
  const [target, setTarget] = useState<any>();
  const [onlineCount, setOnlineCount] = useState<number>();
  const [isChatOpen, setIsChatOpen] = useState<any>(true);
  const [playerState, setPlayerState] = useState<number>();
  const [activeUsers, setActiveUsers] = useState<User[]>();
  const user = useAuth();

  const watchOnlineCount = () => {
    const statusRef = doc(db, 'status/online');
    return onSnapshot(statusRef, (snap) => {
      const status = snap.data() as any;
      setOnlineCount(status?.count || 0);
    });
  };

  useEffect(() => {
    const isClose = Boolean(localStorage.getItem('chatClose'));
    setIsChatOpen(!isClose);

    const unsubscribeOnlineCount = watchOnlineCount();
    const unsubscribeActiveUsers = watchActiveUsers((users) => {
      setActiveUsers(users);
    });

    return () => {
      unsubscribeOnlineCount();
      unsubscribeActiveUsers();
    };
  }, []);

  const initTarget = (event: any) => {
    setTarget(event.target);
  };

  const onStateChange = ({ data }: { data: number }) => {
    setPlayerState(data);
  };

  const toggleIsChatOpen = () => {
    setIsChatOpen((status: boolean) => {
      const newStatus = !status;
      if (newStatus) {
        localStorage.removeItem('chatClose');
      } else {
        localStorage.setItem('chatClose', 'true');
      }
      return newStatus;
    });
  };

  return (
    <div>
      <main className="relative">
        <YouTubePlayer onReady={initTarget} onStateChange={onStateChange} />
        <div className="flex flex-col fixed inset-0 z-10">
          <header className="py-4 px-6 bg-black text-white flex items-center gap-2">
            <h1>{Site.title}</h1>
            <span className="flex-1"></span>
            <button
              title={`???????????????${isChatOpen ? '?????????' : '??????'}`}
              className={classNames('px-2', !isChatOpen && 'opacity-40')}
              onClick={toggleIsChatOpen}
            >
              ????
            </button>
            {user ? (
              <UserProfile />
            ) : (
              <button onClick={login}>Twitter???????????????</button>
            )}
            <a
              href="https://github.com/dninomiya/lofi/wiki"
              target="_blank"
              rel="noreferrer"
              className="px-2"
              title="???????????????????????????"
            >
              ??????
            </a>
            <Clock />
          </header>

          <main className="flex-1 grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
            <div
              className="py-4 px-6 col-span-2 lg:block hidden space-y-6"
              onClick={() => target?.playVideo()}
            >
              {onlineCount !== undefined && (
                <p className="opacity-40 text-sm">
                  {onlineCount.toLocaleString()}?????????????????????...
                </p>
              )}

              {/* <ActiveUserList users={activeUsers} /> */}
            </div>
            <div
              className={classNames(
                'col-span-1 p-4 h-full overflow-hidden',
                !isChatOpen && 'hidden'
              )}
            >
              <div className="rounded-md bg-black bg-opacity-30 p-4 lg:p-6 text-white flex flex-col h-full">
                <MessageForm isVisible={isChatOpen} />
                <Timeline />
              </div>
            </div>
          </main>

          <footer className="flex px-6 items-center bg-black z-10 text-white justify-between">
            {target ? (
              <YouTubeControler playerState={playerState} target={target} />
            ) : (
              <div />
            )}
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Home;
