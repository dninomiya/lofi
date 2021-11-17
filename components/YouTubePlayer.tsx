import YouTube, { Options } from 'react-youtube';

const YouTubePlayer = ({
  onReady,
  onStateChange,
}: {
  onReady: (event: any) => void;
  onStateChange: (event: any) => void;
}) => {
  const opts: Options = {
    height: '390',
    width: '640',
    playerVars: {
      listType: 'playlist',
      list: 'PL0DVChfFgSa85wVKWF-r55_5005wRuQ4-',
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      loop: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-items-center bg-black">
      <YouTube
        opts={opts}
        onReady={(event) => {
          onReady(event);
          event.target.setShuffle(true);
        }}
        className="youtube-space"
        onStateChange={onStateChange}
      />
      <div className="youtube-vintage fixed inset-0"></div>
      <div className="noise"></div>
    </div>
  );
};

export default YouTubePlayer;
