import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Clock from '../components/Clock';
import ExpBar from '../components/ExpBar';
import MemberList from '../components/MemberList';
import MessageForm from '../components/MessageForm';
import Timeline from '../components/Timeline';
import UserProfile from '../components/user-profile';
import YouTubeControler from '../components/YouTubeControler';
import YouTubePlayer from '../components/YouTubePlayer';
import { useAuth } from '../providers/AuthProvider';
import { login } from '../services/AuthService';
import { useRoom } from '../services/RoomService';
import { classNames } from '../utils/classNames';

const Home: NextPage = () => {
  const [target, setTarget] = useState<any>();
  const [isChatOpen, setIsChatOpen] = useState<any>(true);
  const [playerState, setPlayerState] = useState<number>();
  const user = useAuth();
  const router = useRouter();
  const room = useRoom(router.query.id as string);

  const initTarget = (event: any) => {
    setTarget(event.target);
  };

  const onStateChange = ({ data }: { data: number }) => {
    setPlayerState(data);
  };

  const toggleIsChatOpen = () => {
    setIsChatOpen((status: boolean) => !status);
  };

  if (!room) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>{room.name}</title>
        <meta name="description" content={room.description} />
      </Head>

      <main className="relative">
        <YouTubePlayer onReady={initTarget} onStateChange={onStateChange} />
        <div className="flex flex-col fixed inset-0 z-10">
          <header className="py-4 px-6 bg-black text-white flex items-center space-x-2">
            <h1>
              <span>{room.name}</span>
              <span className="ml-2">Lv.{room.lv}</span>
              <span title="非公開">🔒</span>
            </h1>
            <span className="flex-1"></span>
            <Link href="/">
              <a className="px-2" title="他の部屋を探す">
                🔍
              </a>
            </Link>
            <button className="px-2" title="ブロッコリー">
              <span className="mr-1">🍅</span>
              <span>0</span>
            </button>
            {/* <OnlineStatus /> */}
            <button
              title={`チャットを${isChatOpen ? '非表示' : '表示'}`}
              className={classNames('px-2', !isChatOpen && 'opacity-40')}
              onClick={toggleIsChatOpen}
            >
              ☕️
            </button>
            {user ? <UserProfile /> : <button onClick={login}>ログイン</button>}
            <Clock />
          </header>

          <main className="flex-1 grid grid-cols-3 overflow-hidden">
            <div className="py-4 px-6 col-span-2">
              {/* <MemberList users={room.users} /> */}
            </div>
            <div
              className={classNames(
                'col-span-1 p-4 h-full overflow-hidden',
                !isChatOpen && 'hidden'
              )}
            >
              <div className="rounded-md bg-black bg-opacity-30 p-6 text-white flex flex-col h-full">
                <MessageForm isVisible={isChatOpen} />
                <Timeline room={room} />
              </div>
            </div>
          </main>

          <div className="flex gap-4">
            <button className="px-4 py-1 bg-red-500 text-white">
              作業開始
            </button>
            <div className="grid grid-cols-4 gap-4 flex-1">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-4 bg-green-400"></div>
                <div className="col-span-1 bg-green-800"></div>
              </div>
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-4 bg-green-400"></div>
                <div className="col-span-1 bg-green-800"></div>
              </div>
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-4 bg-green-400"></div>
                <div className="col-span-1 bg-green-800"></div>
              </div>
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-4 bg-green-400"></div>
                <div className="col-span-1 bg-green-800"></div>
              </div>
            </div>
          </div>

          <footer className="flex px-6 items-center bg-black z-10 text-white justify-between">
            {target ? (
              <YouTubeControler playerState={playerState} target={target} />
            ) : (
              <div />
            )}
            <ExpBar />
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Home;
