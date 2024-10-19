// src/reducers/gameReducer.js
export const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true,
  scores: { X: 0, O: 0, Ties: 0 },
  isAIMode: false,
};

export function gameReducer(state, action) {
  switch (action.type) {
    case 'MAKE_MOVE':
      const historyUpToStep = state.history.slice(0, state.stepNumber + 1);
      const currentSquares = historyUpToStep[state.stepNumber].squares.slice();

      if (calculateWinner(currentSquares) || currentSquares[action.index]) {
        return state;
      }

      currentSquares[action.index] = state.xIsNext ? 'X' : 'O';
      const newHistory = [...historyUpToStep, { squares: currentSquares }];
      const newStepNumber = historyUpToStep.length;
      const newXIsNext = !state.xIsNext;

      let newScores = { ...state.scores };
      const winner = calculateWinner(currentSquares);
      if (winner) {
        newScores = {
          ...newScores,
          [winner]: newScores[winner] + 1,
        };
      } else if (currentSquares.every(Boolean)) {
        newScores = {
          ...newScores,
          Ties: newScores.Ties + 1,
        };
      }

      return {
        ...state,
        history: newHistory,
        stepNumber: newStepNumber,
        xIsNext: newXIsNext,
        scores: newScores,
      };
    case 'JUMP_TO':
      return {
        ...state,
        stepNumber: action.step,
        xIsNext: action.step % 2 === 0,
      };
    case 'RESET_GAME':
      return {
        ...state,
        history: [{ squares: Array(9).fill(null) }],
        stepNumber: 0,
        xIsNext: true,
      };
    case 'TOGGLE_AI_MODE':
      return {
        ...state,
        isAIMode: !state.isAIMode,
        history: [{ squares: Array(9).fill(null) }],
        stepNumber: 0,
        xIsNext: true,
        scores: { X: 0, O: 0, Ties: 0 },
      };
    default:
      return state;
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}