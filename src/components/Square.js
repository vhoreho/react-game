import React from 'react';
import useSound from 'use-sound'
import boop from '../sounds/click.mp3'

const Square = ({ value, onClick }) => {
  // const [isClick, setClick] = useState(false)
  const [clicked] = useSound(boop, {volume: 0.75})
  const handleClick = () => {
    onClick()
    clicked()
  }
  return (
  <button className='square' onClick={handleClick}>
      {value}
  </button>)
};

export default Square;