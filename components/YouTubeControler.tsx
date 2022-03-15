import { useHotkeys } from 'react-hotkeys-hook';

const YouTubeControler = ({
  playerState,
  target,
}: {
  playerState: number | undefined;
  target: any;
}) => {
  const play = () => {
    target?.playVideo();
  };

  const pause = () => {
    target?.pauseVideo();
  };

  const prev = () => {
    target?.previousVideo();
  };

  const next = () => {
    target?.nextVideo();
  };

  useHotkeys('right', next);
  useHotkeys('left', prev);
  useHotkeys('space', () => {
    if (target?.getPlayerState() === 1) {
      pause();
    } else {
      play();
    }
  });

  return (
    <div className="flex items-center space-x-1 py-2">
      {playerState !== 1 && (
        <button className="flex py-2 px-1 text-2xl emoji" onClick={play}>
          {/* <Image width="12" height="22" src="/images/play.svg" alt="" /> */}
          ▶︎
        </button>
      )}
      {playerState === 1 && (
        <button className="flex py-2 px-1 emoji text-2xl" onClick={pause}>
          {/* <Image width="17" height="22" src="/images/pause.svg" alt="" /> */}
          ⏸
        </button>
      )}
      <button className="flex py-2 px-1 emoji text-2xl" onClick={prev}>
        ⏪
      </button>
      <button className="flex py-2 px-1 emoji text-2xl" onClick={next}>
        ⏩
      </button>
      {target && (
        <a
          className="pl-2 flex-1"
          href={target.playerInfo?.videoUrl}
          rel="noreferrer"
          target="_blank"
        >
          <h2 className="font-bold truncate">
            {target.playerInfo?.videoData?.title}
          </h2>
          <p className="text-sm truncate">
            {target.playerInfo?.videoData?.author}
          </p>
        </a>
      )}
    </div>
  );
};

export default YouTubeControler;
