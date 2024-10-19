export function minimax(newSquares, player, alpha = -Infinity, beta = Infinity, depth = 0) {
     const opponent = player === 'X' ? 'O' : 'X';
     const winner = calculateWinner(newSquares);
   
     if (winner === player) {
       return { score: 10 - depth };
     } else if (winner === opponent) {
       return { score: depth - 10 };
     } else if (newSquares.every(Boolean)) {
       return { score: 0 };
     }
   
     const availableMoves = newSquares
       .map((square, index) => (!square ? index : null))
       .filter((val) => val !== null);
   
     const moves = [];
   
     for (let i = 0; i < availableMoves.length; i++) {
       const move = {};
       move.index = availableMoves[i];
       newSquares[availableMoves[i]] = player;
   
       const result = minimax(newSquares, opponent, alpha, beta, depth + 1);
       move.score = result.score;
   
       newSquares[availableMoves[i]] = null;
       moves.push(move);
   
       // Alpha-Beta Pruning
       if (player === 'X') {
         alpha = Math.max(alpha, move.score);
         if (beta <= alpha) break;
       } else {
         beta = Math.min(beta, move.score);
         if (beta <= alpha) break;
       }
     }
   
     let bestMove;
     if (player === 'X') {
       let bestScore = -Infinity;
       moves.forEach((m) => {
         if (m.score > bestScore) {
           bestScore = m.score;
           bestMove = m;
         }
       });
     } else {
       let bestScore = Infinity;
       moves.forEach((m) => {
         if (m.score < bestScore) {
           bestScore = m.score;
           bestMove = m;
         }
       });
     }
   
     return bestMove;
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