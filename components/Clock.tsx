import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { ja } from 'date-fns/locale';

const Clock = () => {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        format(new Date(), 'M月d日(eee) bbbh時mm分ss秒', {
          locale: ja,
        })
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <p className="text-sm">{time}</p>;
};

export default Clock;
