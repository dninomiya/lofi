import { BaseEmoji, Emoji, Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useAuth } from '../providers/AuthProvider';
import { logout } from '../services/AuthService';
import { updateUser } from '../services/UserService';
import Modal from './Modal';

type FormValue = {
  name: string;
  emoji: string;
};

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState<boolean>(false);
  const user = useAuth();
  const {
    handleSubmit,
    register,
    watch,
    control,
    formState: { isValid },
  } = useForm<FormValue>();

  if (!user) {
    return null;
  }

  const submit = (data: FormValue) => {
    updateUser(user.id, data);
  };

  return (
    <div>
      <button
        title="プロフィール編集"
        className="px-2"
        onClick={() => setIsOpen(true)}
      >
        👤
      </button>
      <Modal
        title="プロフィール"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="mb-6">
          <form onSubmit={handleSubmit(submit)} className="flex gap-4">
            <button
              type="button"
              onClick={() => setIsEmojiPickerOpen((status) => !status)}
              className="w-14 h-14 border-gray-800 border-2 grid place-content-center rounded-lg"
            >
              <Emoji size={32} emoji={watch('emoji') || user.emoji} />
            </button>
            <input
              type="text"
              autoComplete="off"
              className="flex-1 min-w-0 bg-transparent rounded border-gray-800 border-2"
              defaultValue={user.name}
              {...register('name', {
                required: true,
              })}
            />
            <button disabled={!isValid}>更新</button>
          </form>
        </div>

        {isEmojiPickerOpen && (
          <div>
            <Controller
              name="emoji"
              control={control}
              render={(props) => (
                <Picker
                  theme="dark"
                  title="アイコンを選ぶ"
                  emoji="point_up"
                  onSelect={(emoji) => props.field.onChange(emoji.id)}
                />
              )}
            />
          </div>
        )}

        <div className="flex items-center justify-between mt-6">
          <button onClick={() => setIsOpen(false)}>閉じる</button>

          <button
            className="text-sm text-gray-700 ml-auto block"
            onClick={logout}
          >
            ログアウト
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default UserProfile;
