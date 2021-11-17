import { useForm } from 'react-hook-form';
import { Room } from '../types/Room';

const RoomEditor = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm<Room>({
    mode: 'onChange',
  });

  const submit = (data: Room) => {};

  const activityOptions = [
    { value: 'allDay', label: '終日' },
    { value: 'earlyMorning', label: '早朝（4時〜6時）' },
    { value: 'morning', label: '午前中（7時〜11時）' },
    { value: 'noon', label: '昼（11時〜13時）' },
    { value: 'afternoon', label: '午後（13時〜16時）' },
    { value: 'evening', label: '夕方（16時〜18時）' },
    { value: 'night', label: '夜（18時〜22時）' },
    { value: 'midnight', label: '深夜（22時〜深夜4時）' },
  ];

  const levelLimitOptions = [
    { value: undefined, label: 'なし' },
    { value: '-5', label: '5以下のみ参加可能' },
    { value: '5-10', label: '5〜10のみ参加可能' },
    { value: '10-', label: '10以上のみ参加可能' },
  ];

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4">
      <label className="flex items-center space-x-2">
        <span>部屋の名前</span>
        <input
          className="bg-transparent flex-1 rounded"
          {...register('name', {
            required: true,
            maxLength: 20,
          })}
          type="text"
          required
          autoComplete="off"
          placeholder="受験勉強部屋/フリーランス部屋"
        />
      </label>
      <label className="flex items-center space-x-2">
        <span>活動時間帯</span>
        <select
          className="bg-transparent flex-1 rounded"
          {...register('activityTime', {
            required: true,
          })}
          required
        >
          <option>不定期 / いつでも</option>
          {activityOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>
      <label className="flex items-center space-x-2">
        <span>レベル制限</span>
        <select
          className="bg-transparent flex-1 rounded"
          {...register('levelLimit', {
            required: true,
          })}
          required
        >
          {levelLimitOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>
      <label className="flex items-center space-x-2">
        <span>部屋の説明</span>
        <textarea
          className="bg-transparent rounded flex-1"
          {...register('description', {
            required: true,
            maxLength: 140,
          })}
          required
        />
      </label>
      <div className="flex items-center space-x-2">
        <label htmlFor="secret-word">🔒秘密部屋にする</label>
        <input
          id="secret-word"
          className="text-green-400 rounded"
          type="checkbox"
          {...register('private')}
        />
      </div>
      {watch('private') && (
        <label className="flex items-center space-x-2">
          <span>あいことば</span>
          <input
            className="bg-transparent rounded flex-1"
            type="text"
            autoComplete="off"
          />
        </label>
      )}
      <div className="text-right">
        <button
          className="border-green-400 border disabled:border-gray-400 px-4 py-2 rounded disabled:opacity-30 disabled:text-white text-green-400 text-glow disabled:cursor-not-allowed"
          disabled={!isValid}
        >
          <span className="mr-2">作成</span>
          <span className="text-xs">🥦×10</span>
        </button>
      </div>
    </form>
  );
};

export default RoomEditor;
