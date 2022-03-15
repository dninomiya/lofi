import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Clock from '../components/Clock';
import MessageForm from '../components/MessageForm';
import Timeline from '../components/Timeline';
import UserProfile from '../components/user-profile';
import YouTubeControler from '../components/YouTubeControler';
import YouTubePlayer from '../components/YouTubePlayer';
import { Site } from '../lib/site';
import { useAuth } from '../providers/AuthProvider';
import { login } from '../services/AuthService';
import { useRoom } from '../services/RoomService';
import { classNames } from '../utils/classNames';

const Home: NextPage = () => {
  const [target, setTarget] = useState<any>();
  const [isChatOpen, setIsChatOpen] = useState<any>(true);
  const [playerState, setPlayerState] = useState<number>();
  const user = useAuth();

  useEffect(() => {
    const isClose = Boolean(localStorage.getItem('chatClose'));
    setIsChatOpen(!isClose);
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
      <Head>
        <title>{Site.title}</title>
        <meta name="description" content={Site.title} />
      </Head>

      <main className="relative">
        <YouTubePlayer onReady={initTarget} onStateChange={onStateChange} />
        <div className="flex flex-col fixed inset-0 z-10">
          <header className="py-4 px-6 bg-black text-white flex items-center gap-2">
            <h1>{Site.title}</h1>
            <span className="flex-1"></span>
            <button
              title={`チャットを${isChatOpen ? '非表示' : '表示'}`}
              className={classNames('px-2', !isChatOpen && 'opacity-40')}
              onClick={toggleIsChatOpen}
            >
              💬
            </button>
            {user ? <UserProfile /> : <button onClick={login}>ログイン</button>}
            <a
              href="https://github.com/dninomiya/lofi/wiki"
              target="_blank"
              rel="noreferrer"
              className="px-2"
            >
              ℹ️
            </a>
            <Clock />
          </header>

          <main className="flex-1 grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
            <div
              className="py-4 px-6 col-span-2 lg:block hidden"
              onClick={() => target?.playVideo()}
            ></div>
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
