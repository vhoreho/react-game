import React from "react";
import {
  getStatus,
  getWinner,
  useStateWithLocalStorage,
  useKey,
} from "../utils";
import Board from "./Board";
import Modal from "./Modal";
import MusicPlayer from "./MusicPlayer";
import { ToggleBtn } from "./ToggleBtn";

const Game = () => {
  const [store, setStore] = useStateWithLocalStorage(
    [Array(9).fill(null)],
    "store"
  );
  const [step, setStep] = useStateWithLocalStorage(0, "step");
  const [isNext, setIsNext] = useStateWithLocalStorage(true, "isNext");
  const [stat, setStat] = useStateWithLocalStorage(
    {
      X: 0,
      O: 0,
      draw: 0,
    },
    "stat"
  );

  const winner = getWinner(store[step]);

  const handleClick = (i) => {
    const timeInStore = store.slice(0, step + 1);
    const current = timeInStore[step];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = isNext ? "X" : "O";
    setStore([...timeInStore, squares]);
    setStep(timeInStore.length);
    if (winner) setIsNext(true);
    setIsNext(!isNext);
  };

  const jumpTo = (step) => {
    setStep(step);
    setIsNext(step % 2 === 0);
  };

  const renderMoves = () =>
    store.map((_step, move) => {
      const destination = move ? `Перейти к ходу #${move}` : "Начало";
      return (
        <li key={move} className="move-item">
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  const handleNewGame = () => {
    setStore([Array(9).fill(null)]);
    setStep(0);
    setStat({ ...stat, [winner]: ++stat[winner] });
    setIsNext(true);
  };

  function handleChangeWhoIsNext() {
    !step && setIsNext(!isNext);
  }

  function handleResetStat() {
    setStat({
      X: 0,
      O: 0,
      draw: 0,
    });
  }

  useKey("KeyC", handleChangeWhoIsNext);
  useKey("KeyR", handleResetStat);
  return (
    <React.Fragment>
      <div className="board-and-stat">
        <div className="game-static">
          <p className="static-title">Статистика: </p>
          <div className="static-list">
            <li className="static-item">
              X: <span>{stat.X} поб.</span>
            </li>
            <li className="static-item">
              O: <span>{stat.O} поб.</span>
            </li>
            <li className="static-item">
              Ничья: <span>{stat.draw} нич.</span>
            </li>
          </div>
        </div>
        <Board squares={store[step]} onClick={handleClick} />
      </div>
      <div className="game-info">
        <p className="status">{getStatus(store[step], isNext)}</p>
        {renderMoves()}
        <div className="controls">
          {!step && (
            <ToggleBtn onClick={() => setIsNext(!isNext)} whoIsNext={isNext} />
          )}
          <button onClick={handleNewGame} className="new">
            Новая игра
          </button>
        </div>
        <MusicPlayer />
        <div className="hotkeys">
          Горячие клавиши:
          <ul>
            <li>C - Изменить порядок ходов (Х или О)</li>
            <li>R - Сбросить статистику</li>
            <li>P - Включить/Выключить музыку</li>
            <li>O - Повысить громкость</li>
            <li>L - Уменьшить громкость</li>
          </ul>
        </div>
      </div>
      {winner && <Modal win={winner} onClick={handleNewGame} />}
    </React.Fragment>
  );
};

export default Game;
