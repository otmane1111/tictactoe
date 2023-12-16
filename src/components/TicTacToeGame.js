// src/components/TicTacToe.js

import React, { useState } from "react";
import '../pages/styles.css'; // Import des styles
import '../components/TicTacToe.css'; // Import des styles
import { Link } from 'gatsby';


const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? "🐟" : "🐠";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const renderRow = (rowIndex) => {
    return (
      <div className="row" key={rowIndex}>
        {[0, 1, 2].map((colIndex) => renderSquare(rowIndex * 3 + colIndex))}
      </div>
    );
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : board.every((square) => square)
    ? "Draw!"
    : `Next player: ${isXNext ? "🐟" : "🐠"}`;

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        {[0, 1, 2].map((rowIndex) => renderRow(rowIndex))}
      </div>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
};

const calculateWinner = (squares) => {
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
};

export default TicTacToe;
