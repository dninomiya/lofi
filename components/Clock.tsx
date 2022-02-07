import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { ja } from 'date-fns/locale';

const Clock = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <p className="text-sm">
      {format(date, 'M月d日(eee) HH時mm分ss秒', {
        locale: ja,
      })}
    </p>
  );
};

export default Clock;
