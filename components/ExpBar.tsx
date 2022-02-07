import { useEffect, useState } from 'react';
import { classNames } from '../utils/classNames';
import { secToMin } from '../utils/sec-to-min';

const ExpBar = () => {
  const MINUTES = 25;
  const SECONDS = MINUTES * 60;
  const [now, setNow] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (active) {
      const timer = setInterval(() => {
        if (now === MINUTES) {
          setActive(false);
          return;
        }

        setNow((n) => n + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [active]);

  const getExp = () => {
    setNow(0);
  };

  return (
    <div className="flex items-center">
      <div>
        <div className="border-green-400 h-2 flex border relative w-40 box-glow">
          <div
            style={{ width: (now / SECONDS) * 100 + '%' }}
            className="bg-green-400 box-glow transition-width"
          ></div>
        </div>
        <p className="text-xs text-right opacity-60 text-green-400 text-glow">
          {secToMin(now)}/{secToMin(SECONDS)}
        </p>
      </div>
      {active ? (
        <button
          disabled={now !== SECONDS}
          className={classNames(
            'disabled:opacity-20 disabled:cursor-not-allowed ml-4 border text-sm px-2 py-1 border-green-400 rounded bg-green-400 bg-opacity-30 box-glow font-bold text-green-400 text-glow'
          )}
          onClick={getExp}
        >
          回収(+1🍅)
        </button>
      ) : (
        <button
          className={classNames(
            'ml-4 border text-sm px-2 py-1 border-green-400 rounded bg-green-400 bg-opacity-30 box-glow font-bold text-green-400 text-glow'
          )}
          onClick={() => setActive(true)}
        >
          開始
        </button>
      )}
    </div>
  );
};

export default ExpBar;
