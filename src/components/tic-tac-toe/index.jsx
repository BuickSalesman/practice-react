import { useState } from "react";
import "./styles.css";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);

  function handleClick(getCurrentSquare) {
    let copySquares = [...squares];
    copySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(copySquares);
  }

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square onClick={() => handleClick(0)} />
        <Square onClick={() => handleClick(1)} />
        <Square onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square onClick={() => handleClick(3)} />
        <Square onClick={() => handleClick(4)} />
        <Square onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square onClick={() => handleClick(6)} />
        <Square onClick={() => handleClick(7)} />
        <Square onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

// RETURN TO VIDEO AT 4:05:10
