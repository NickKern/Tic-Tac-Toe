import React, { useState } from "react";

import "./Game.css";

import Board from "../Board";
import HistoryList from "../HistoryList";

export default function Game() {
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  return (
    <div className='game'>
      <div className='game-board'>
        <h1> {isX ? `Next player: X` : `Next player: O`} </h1>
        <Board
          history={history}
          setHistory={setHistory}
          setWinner={setWinner}
          board={board}
          setBoard={setBoard}
          isX={isX}
          setIsX={setIsX}
          winner={winner}
          setWinner={setWinner}
        />
      </div>
      <div className='history'>
        <div className='List'>
          <h2>Winner:{winner}</h2>
          <HistoryList
            setHistory={setHistory}
            setBoard={setBoard}
            history={history}
            setIsX={setIsX}
            setWinner={setWinner}
          />
        </div>
      </div>
    </div>
  );
}
