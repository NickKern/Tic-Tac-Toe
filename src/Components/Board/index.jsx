import React from "react";

import "./Board.css";

import Square from "../Square";

export default function Board({
  board,
  setBoard,
  setWinner,
  history,
  setHistory,
  isX,
  setIsX,
  winner,
}) {
  const renderElement = (i) => {
    return <Square onClickHandler={() => onClickHandler(i)} value={board[i]} />;
  };

  const onClickHandler = (i) => {
    if (board[i]) {
      return;
    }
    if (winner) {
      return;
    }
    const newboard = board.slice();
    newboard[i] = isX ? "X" : "O";
    setBoard(newboard);
    const newHistory = [...history, newboard];
    setHistory(newHistory);
    setIsX(!isX);
    checkWinners(newboard);
  };

  const checkWinners = (newboard) => {
    const list = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    for (let i = 0; i < list.length; i++) {
      const [a, b, c] = list[i];
      if (
        newboard[a] &&
        newboard[a] === newboard[b] &&
        newboard[a] === newboard[c]
      ) {
        setWinner(newboard[a]);
        return newboard[a];
      }
    }
  };
  return (
    <>
      <div className='board-row'>
        {renderElement(1)}
        {renderElement(2)}
        {renderElement(3)}
      </div>
      <div className='board-row'>
        {renderElement(4)}
        {renderElement(5)}
        {renderElement(6)}
      </div>
      <div className='board-row'>
        {renderElement(7)}
        {renderElement(8)}
        {renderElement(9)}
      </div>
      <div className='board-row'></div>
    </>
  );
}
