import { useEffect, useState } from 'react';
import { classNames } from '../utils/classNames';

const ExpBar = () => {
  const MINUTES = 25;
  const LIMIT = MINUTES * 60;
  const [now, setNow] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNow((n) => Math.min(n + 1, LIMIT));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getExp = () => {
    setNow(0);
  };

  return (
    <div className="flex items-center">
      <div>
        <div className="border-green-400 h-2 flex border relative w-40 box-glow">
          <div
            style={{ width: (now / LIMIT) * 100 + '%' }}
            className="bg-green-400 box-glow transition-width"
          ></div>
        </div>
        <p className="text-xs text-right opacity-60 text-green-400 text-glow">
          {now.toLocaleString()}/{LIMIT.toLocaleString()} Exp
        </p>
      </div>
      <button
        disabled={now !== LIMIT}
        className={classNames(
          'disabled:opacity-20 disabled:cursor-not-allowed ml-4 border text-sm px-2 py-1 border-green-400 rounded bg-green-400 bg-opacity-30 box-glow font-bold text-green-400 text-glow'
        )}
        onClick={getExp}
      >
        回収
      </button>
    </div>
  );
};

export default ExpBar;
