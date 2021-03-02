import React, { useState } from "react";
import { useAudio } from "../utils";

import play from "../img/play.svg";
import stop from "../img/stop.svg";

import soundUrl from "../sounds/main.mp3";

function MusicPlayer() {
  // const [volume, setVolume] = useState(0.4)
  const [playing, toggle] = useAudio(soundUrl, {volume});
  return (
    <React.Fragment>
      <div className="player">
        <button className="play" onClick={toggle}>
          <img src={!playing ? play : stop} alt="" />
        </button>
      </div>
    </React.Fragment>
  );
}

export default MusicPlayer;
