import { KeyboardEvent } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../providers/AuthProvider';
import { addMessage } from '../services/RoomService';
import { Message } from '../types/Message';
import TextareaAutosize from 'react-textarea-autosize';

const MessageForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { isValid },
  } = useForm<Message>({
    mode: 'onChange',
  });
  const user = useAuth();

  if (!user) {
    return null;
  }

  const onSubmit = (data: Message) => {
    addMessage('xxx', user.uid, data.body);
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
        placeholder="意気込みや成果を共有する"
        autoFocus
        className="bg-transparent w-full resize-none rounded"
        {...register('body', {
          required: true,
        })}
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
