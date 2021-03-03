import { useState, useEffect, useRef } from "react";

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

export const useStateWithLocalStorage = (defaultValue, localStorageKey) => {
  const [value, setValue] = useState(() => {
    const localStorageValue = window.localStorage.getItem(localStorageKey);
    return localStorageValue == null
      ? defaultValue : JSON.parse(localStorageValue);
  });

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [localStorageKey, value]);

  return [value, setValue];
};

export const useKey = (key, cb) => {
  const callbackRef = useRef(cb)

  useEffect(() => {
    callbackRef.current = cb;
  })

  useEffect(() => {
    function handle(event) {
      console.log(event)
      if(event.code === key) {
        callbackRef.current(event)
      }
    }
    window.addEventListener('keypress', handle)
    return () => window.removeEventListener('keypress', handle)
  }, [key])
}
