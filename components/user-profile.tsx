import { BaseEmoji, Emoji, Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../providers/AuthProvider';
import { logout } from '../services/AuthService';
import { updateUser } from '../services/UserService';
import Modal from './Modal';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState<boolean>(false);
  const user = useAuth();
  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm();

  if (!user) {
    return null;
  }

  const updateEmoji = (emoji: BaseEmoji) => {
    updateUser(user.id, {
      emoji: emoji.id,
    });
  };

  const updateName = (data: { name: string }) => {
    updateUser(user.id, {
      name: data.name,
    });
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
          <div className="flex gap-4">
            <button
              onClick={() => setIsEmojiPickerOpen((status) => !status)}
              className="w-14 h-14 border-gray-800 border-2 grid place-content-center rounded-lg"
            >
              <Emoji size={32} emoji={user.emoji} />
            </button>
            <div className="flex-1">
              <form onSubmit={handleSubmit(updateName)}>
                <input
                  type="text"
                  autoComplete="off"
                  className="bg-transparent mb-2 rounded border-gray-800 border-2"
                  defaultValue={user.name}
                  {...register('name', {
                    required: true,
                  })}
                />
                <button disabled={!isValid}>更新</button>
              </form>
            </div>
          </div>
        </div>

        {isEmojiPickerOpen && (
          <Picker
            theme="dark"
            title="アイコンを選ぶ"
            emoji="point_up"
            onSelect={updateEmoji}
          />
        )}

        <button onClick={() => setIsOpen(false)}>閉じる</button>

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
