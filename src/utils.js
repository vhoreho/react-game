import { useState, useEffect } from "react";

export function getWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function getStatus(matrix, nextStep) {
  const winner = getWinner(matrix);
  if (winner) {
    return `Победитель: ${winner}`;
  } else if (matrix.every(Boolean)) {
    return `Ничья`;
  } else {
    return `Следующий ход: ${nextStep ? "X" : "O"}`;
  }
}

export const useAudio = (url) => {
  const [audio, setAudio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  const addAudio = (url) => setAudio(url);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle, addAudio];
};

export const useStateWithLocalStorage = (defaultValue, localStorageKey) => {
  const [value, setValue] = useState(() => {
    const localStorageValue = window.localStorage.getItem(localStorageKey);

    console.log(JSON.parse(localStorageValue));

    return localStorageValue == null
      ? defaultValue : JSON.parse(localStorageValue);
  });

  useEffect(() => {
    console.log('render localstorage hook');
    window.localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [localStorageKey, value]);

  return [value, setValue];
};
