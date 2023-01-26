/* eslint-disable jsx-a11y/media-has-caption */
interface PlayButtonProps {
  src?: string;
}

import Play from '../icons/Play';

const PlayButton = (props: PlayButtonProps) => {
  const player = new Audio(props.src);

  if (!props.src) return null;
  return (
    <>
      <audio src={props.src} />
      <button
        onClick={() => player.play()}
        aria-label="play-phonetic"
        aria-roledescription="Play phonetic"
      >
        <Play
          className="[&>g]:hover:fill-white [&>g>circle]:hover:opacity-100
            [&>g]:transition-all [&>g]:ease-in-out [&>g]:duration-200"
        />
      </button>
    </>
  );
};

export default PlayButton;
