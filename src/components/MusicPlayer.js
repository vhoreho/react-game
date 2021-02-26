import React from "react";
import {useAudio} from '../utils'

import play from '../img/play.svg'
import stop from '../img/stop.svg'

import soundUrl from '../sounds/main.mp3'

function MusicPlayer() {
  const [playing, toggle] = useAudio(soundUrl)
  return <div className="player">
    <button className='play' onClick={toggle}><img src={!playing ? play : stop} alt=""/></button>
  </div>;
}

export default MusicPlayer;
