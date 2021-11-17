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
    target?.prevVideo();
  };

  const next = () => {
    target?.nextVideo();
  };

  return (
    <div className="flex items-center">
      {playerState !== 1 && (
        <button className="flex p-4 text-2xl emoji" onClick={play}>
          {/* <Image width="12" height="22" src="/images/play.svg" alt="" /> */}
          ▶︎
        </button>
      )}
      {playerState === 1 && (
        <button className="flex p-4 emoji text-2xl" onClick={pause}>
          {/* <Image width="17" height="22" src="/images/pause.svg" alt="" /> */}
          ⏸
        </button>
      )}
      <button className="flex p-4 emoji text-2xl" onClick={prev}>
        ⏪
      </button>
      <button className="flex p-4 emoji text-2xl" onClick={next}>
        ⏩
      </button>
      {target && (
        <a href={target.playerInfo?.videoUrl} rel="noreferrer" target="_blank">
          <h2 className="font-bold">{target.playerInfo?.videoData?.title}</h2>
          <p className="text-sm">{target.playerInfo?.videoData?.author}</p>
        </a>
      )}
    </div>
  );
};

export default YouTubeControler;
