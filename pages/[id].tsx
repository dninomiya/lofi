import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import AuthActions from '../components/AuthActions';
import Clock from '../components/Clock';
import ExpBar from '../components/ExpBar';
import MemberList from '../components/MemberList';
import MessageForm from '../components/MessageForm';
import OnlineStatus from '../components/OnlineStatus';
import Timeline from '../components/Timeline';
import YouTubeControler from '../components/YouTubeControler';
import YouTubePlayer from '../components/YouTubePlayer';
import { useRoom } from '../services/RoomService';
import { classNames } from '../utils/classNames';

const Home: NextPage = () => {
  const [target, setTarget] = useState<any>();
  const [isChatOpen, setIsChatOpen] = useState<any>(true);
  const [playerState, setPlayerState] = useState<number>();
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

      <main className="relative font-dot">
        <YouTubePlayer onReady={initTarget} onStateChange={onStateChange} />
        <div className="flex flex-col fixed inset-0 z-10">
          <header className="py-4 px-6 bg-black text-white flex items-center space-x-6">
            <h1>
              <span>{room.name}</span>
              <span className="ml-2">Lv.{room.lv}</span>
              <span title="非公開">🔒</span>
            </h1>
            <span className="flex-1"></span>
            <Link href="/">
              <a className="emoji" title="他の部屋を探す">
                🔍
              </a>
            </Link>
            <button title="ブロッコリー">
              <span className="emoji mr-1">🥦</span>
              <span>40</span>
            </button>
            <OnlineStatus />
            <button
              title={`チャットを${isChatOpen ? '非表示' : '表示'}`}
              className={classNames('emoji', !isChatOpen && 'opacity-40')}
              onClick={toggleIsChatOpen}
            >
              💬
            </button>
            <AuthActions />
            <Clock />
          </header>

          <main className="flex-1 grid grid-cols-3 overflow-hidden">
            <div className="py-4 px-6 col-span-2">
              <MemberList users={room.users} />
            </div>
            <div
              className={classNames(
                'col-span-1 p-4 h-full overflow-hidden',
                !isChatOpen && 'hidden'
              )}
            >
              <div className="rounded-md bg-black bg-opacity-30 p-6 text-white flex flex-col h-full">
                <MessageForm />
                <Timeline room={room} />
              </div>
            </div>
          </main>

          <footer className="flex px-6 items-center bg-black z-10 text-white justify-between">
            <YouTubeControler playerState={playerState} target={target} />
            <ExpBar />
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Home;
