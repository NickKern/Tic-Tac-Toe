import React from "react";

import "./HistoryList.css";

export default function HistoryList({
  setIsX,
  setHistory,
  setBoard,
  history,
  setWinner,
}) {
  const onClickHandler = (event) => {
    setBoard(history[event.target.value]);
    const newCount = Number(event.target.value) + 1;
    setHistory(history.slice(0, newCount));
    setIsX(newCount % 2 === 0 ? false : true);
    setWinner(null);
  };
  return (
    <div className='list'>
      {history.map((item, index) => {
        return (
          <button onClick={onClickHandler} key={index} value={index}>
            {index === 0 ? `Go to start` : `Go to move #${index}`}
          </button>
        );
      })}
    </div>
  );
}
