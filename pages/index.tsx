import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { useState } from 'react';
import Modal from '../components/Modal';
import RoomEditor from '../components/RoomEditor';
import { useRooms } from '../services/RoomService';
import Link from 'next/link';

const Home = () => {
  const rooms = useRooms();
  const [isRoomOpen, setIsRoomOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="container">
        <header className="py-4 flex justify-between items-center">
          <h1>🍅 PomoSpace</h1>
          <button onClick={() => setIsRoomOpen(true)}>create room</button>
        </header>
        <div className="grid grid-cols-4 gap-4">
          {rooms?.map((room) => (
            <Link href={room.rid} key={room.rid}>
              <a className="p-4 border block">
                <h2>{room.name}</h2>
                <p className="text-sm opacity-40 mt-1">
                  {formatDistanceToNow(room.createdAt, {
                    locale: ja,
                    addSuffix: true,
                  })}
                </p>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <Modal
        title="部屋を作る"
        isOpen={isRoomOpen}
        onClose={() => setIsRoomOpen(false)}
      >
        <RoomEditor onComplete={() => setIsRoomOpen(false)} />
      </Modal>
    </div>
  );
};

export default Home;
