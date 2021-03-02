import React from "react";
import { useAudio } from "../utils";

import play from "../img/play.svg";
import stop from "../img/stop.svg";

import soundUrl from "../sounds/main.mp3";

function MusicPlayer() {
  const [playing, toggle] = useAudio(soundUrl);
  return (
    <React.Fragment>
      <div className="player" onClick={toggle}>
        <button className="play" >
          <img src={!playing ? play : stop} alt="" />
        </button>
      </div>
    </React.Fragment>
  );
}

export default MusicPlayer;
