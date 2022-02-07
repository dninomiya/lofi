import React, { useState } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { logout } from '../services/AuthService';
import Modal from './Modal';
import 'emoji-mart/css/emoji-mart.css';
import { BaseEmoji, Emoji, Picker } from 'emoji-mart';
import { updateUser } from '../services/UserService';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState<boolean>(false);
  const user = useAuth();

  if (!user) {
    return null;
  }

  const udpateEmoji = (emoji: BaseEmoji) => {
    updateUser(user.id, {
      emoji: emoji.id,
    });
    setIsEmojiPickerOpen(false);
  };

  return (
    <div>
      <button className="px-2" onClick={() => setIsOpen(true)}>
        👤
      </button>
      <Modal
        title="プロフィール"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsEmojiPickerOpen((status) => !status)}
              className="w-14 h-14 border grid place-content-center rounded-lg"
            >
              <Emoji size={32} emoji={user.emoji} />
            </button>
            <div className="flex-1">
              <p>{user.name}</p>
              <p>🍅 {user.tomato || 0}</p>
            </div>
          </div>
        </div>

        {isEmojiPickerOpen && (
          <Picker
            theme="dark"
            title="アイコンを選ぶ"
            emoji="point_up"
            onSelect={udpateEmoji}
          />
        )}

        <button
          className="text-sm text-gray-700 ml-auto block"
          onClick={logout}
        >
          ログアウト
        </button>
      </Modal>
    </div>
  );
};

export default UserProfile;
