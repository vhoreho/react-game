import React, { useEffect, useState } from "react";
import { useKey } from "../utils";
import useSound from "use-sound";

import soundUrl from "../sounds/main.mp3";

const Pause = ({ stop }) => {
  return (
    <svg
      className="buttonPlayer"
      fill="#fff"
      viewBox="0 0 60 60"
      onClick={() => stop()}
    >
      <polygon points="0,0 15,0 15,60 0,60" />
      <polygon points="25,0 40,0 40,60 25,60" />
    </svg>
  );
};

const Play = ({ play }) => {
  return (
    <svg
      className="buttonPlayer"
      fill="#fff"
      viewBox="0 0 60 60"
      onClick={play}
    >
      <polygon points="0,0 50,30 0,60" />
    </svg>
  );
};

const Player = () => {
  const [volume, setVolume] = useState(0.5);
  const [play, { stop, isPlaying }] = useSound(soundUrl, { volume });

  function handleUpVolume() {
    setVolume(volume => volume !== 1 && volume < 0.9 ? volume + 0.1 : volume)
  }

  function handleDownVolume() {
    setVolume(volume => volume !== 0 && volume > 0 ? volume - 0.1 : volume)
  }

  useEffect(() => {
    console.log('Render player', volume);
  }, [volume])

  useKey("KeyP", isPlaying ? () => stop() : play);
  useKey('KeyO', handleUpVolume)
  useKey('KeyL', handleDownVolume)
  return (
    <div className="player">
      <p>Плеер:</p>
      <button onClick={handleDownVolume} className='volume'>-</button>
      {isPlaying ? <Pause stop={stop} /> : <Play play={play} />}
      <button onClick={handleUpVolume} className='volume'>+</button>
    </div>
  );
};

export default Player;

// function MusicPlayer() {
//   const [playing, toggle] = useAudio(soundUrl);
//   useKey('KeyP', toggle)
//   return (
//     <React.Fragment>
//       <div className="player" onClick={toggle}>
//         <button className="play" >
//           <img src={!playing ? play : stop} alt="" />
//         </button>
//       </div>
//     </React.Fragment>
//   );
// }

// export default MusicPlayer;
