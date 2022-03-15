import { KeyboardEvent, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useHotkeys } from 'react-hotkeys-hook';
import TextareaAutosize from 'react-textarea-autosize';
import { useAuth } from '../providers/AuthProvider';
import { login } from '../services/AuthService';
import { addMessage } from '../services/RoomService';
import { Message } from '../types/Message';

type Props = {
  isVisible: boolean;
};

const MessageForm = ({ isVisible }: Props) => {
  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { isValid },
  } = useForm<Message>({
    mode: 'onChange',
  });

  const { ref, ...rest } = register('body', {
    required: true,
  });

  const user = useAuth();
  const inputRef = useRef<HTMLTextAreaElement>();

  useHotkeys('f', (e) => {
    inputRef.current?.focus();
    e.preventDefault();
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  }, [isVisible]);

  if (user === undefined) {
    return null;
  }

  if (user === null) {
    return (
      <p className="mb-6">
        <button onClick={login} className="text-pink-600">
          匿名で参加
        </button>
        してコメントする
      </p>
    );
  }

  const onSubmit = (data: Message) => {
    addMessage('global', {
      name: user.name,
      emoji: user.emoji,
      body: data.body,
    });
    reset();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.metaKey && event.key === 'Enter' && isValid) {
      onSubmit(getValues());
    }
  };

  return (
    <form className="mb-1 text-right" onSubmit={handleSubmit(onSubmit)}>
      <TextareaAutosize
        onKeyDown={handleKeyDown}
        placeholder="意気込みなど"
        autoFocus
        className="bg-transparent w-full resize-none rounded"
        {...rest}
        ref={(e) => {
          ref(e);
          inputRef.current = e as HTMLTextAreaElement;
        }}
      />
      <button
        disabled={!isValid}
        className="text-sm disabled:opacity-40 disabled:text-white text-green-400 text-glow"
        type="submit"
      >
        <span className="emoji">⏎</span>(Cmd + Enter)
      </button>
    </form>
  );
};

export default MessageForm;
