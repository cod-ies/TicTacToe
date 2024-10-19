import React, { useReducer, useEffect } from 'react';
import Square from './Square';
import GameStatus from './GameStatus';
import Scoreboard from './Scoreboard';
import ModeSelector from './ModeSelector';
import { minimax } from '../utils/minimax';
import { gameReducer, initialState } from '../reducers/gameReducer';

function Board() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const { history, stepNumber, xIsNext, scores, isAIMode } = state;
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const isTie = stepNumber === 9 && !winner;

  useEffect(() => {
    if (isAIMode && !winner && !xIsNext) {
      const aiMove = minimax(current.squares, 'O').index;
      if (aiMove !== undefined && !current.squares[aiMove]) {
        setTimeout(() => {
          dispatch({ type: 'MAKE_MOVE', index: aiMove });
        }, 500);
      }
    }
  }, [current, isAIMode, winner, xIsNext]);

  const handleClick = (index) => {
    if (!current.squares[index] && !winner) {
      dispatch({ type: 'MAKE_MOVE', index });
    }
  };

  const jumpTo = (step) => dispatch({ type: 'JUMP_TO', step });
  const resetGame = () => dispatch({ type: 'RESET_GAME' });

  const moves = history.map((_, move) => (
    <li key={move} className="mb-2">
      <button
        className="w-full px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-lg hover:bg-gradient-to-r hover:from-indigo-200 hover:to-purple-200 transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
        onClick={() => jumpTo(move)}
      >
        {move ? `Move #${move}` : 'Game Start'}
      </button>
    </li>
  ));

  const statusMessage = winner
    ? `🎉 Winner: Player ${winner} 🎉`
    : isTie
    ? '🤝 Tie Game!'
    : `🕹️ Next Player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-8 p-8 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="flex-1 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-indigo-200">
        <Scoreboard scores={scores} />
        <GameStatus status={statusMessage} />
        <ModeSelector isAIMode={isAIMode} toggleAIMode={() => dispatch({ type: 'TOGGLE_AI_MODE' })} />
        <div className="grid grid-cols-3 gap-4 mt-6">
          {current.squares.map((square, index) => (
            <Square key={index} value={square} onClick={() => handleClick(index)} />
          ))}
        </div>
        <button
          className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>
      <div className="flex-1 lg:max-w-xs bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-indigo-200">
        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Move History</h2>
        <ol className="list-decimal list-inside space-y-2">{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6], // Diagonals
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;