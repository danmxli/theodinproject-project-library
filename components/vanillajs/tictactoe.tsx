import GameBoard from "./tictactoe/gameBoard";
import CodeDisplay from "../codedisplay";

const TicTacToeDemo = () => {
    return (
        <div className="bg-neutral-100 dark:bg-slate-950 rounded-lg p-4 mb-4">
            <h1 className="dark:text-indigo-400 text-2xl mb-4">Tic Tac Toe Project</h1>
            <h2 className="dark:text-indigo-400 mb-2">Project Overview</h2>
            <p className="lg:max-w-2xl mb-2 dark:text-gray-400">
                A three-by-three grid is used to play the two-player game Tic Tac Toe. Every participant, who can only be O or X, has to plot once every turn. A player can only win if they have three consecutive joins. When the grid is full and no player has connected three in a row, the game ends in a draw.
                This project showcases that in a web application.
            </p>
            <p className="lg:max-w-2xl mb-2 dark:text-gray-400">
                In addition, it showcases the minimax algorithm written in Javascript, which finds the best move based on minimizing the possible loss for a worst case maximum loss scenario.
                Because of this, the bot is almost unbeatable!
            </p>
            <h2 className="dark:text-indigo-400 mb-2">Project Interface - Try below!</h2>
            <GameBoard />

            <div className="mt-4 inline-grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-2 bg-neutral-200 dark:bg-slate-900 border border-gray-400 dark:border-gray-700 rounded">
                    <h2 className="dark:text-indigo-400 mb-2">Minimax Algorithm code</h2>
                    <div className="">
                        <CodeDisplay code={minimaxCode} />
                        <p>
                            This assumes a tic tac toe grid is represented by a 1-d array of size 9, and player markers are O.
                            findBestMove returns the position that the algorithm chooses as an index number.
                        </p>
                        <>
                            <a className="text-indigo-600" href="https://www.youtube.com/watch?v=fT3YWCKvuQE" target="_blank">Alpha-beta pruning and depth management theory</a><br />
                            <a className="text-indigo-600" href="https://en.wikipedia.org/wiki/Minimax" target="_blank">Minimax definition</a>
                        </>
                        
                        
                    </div>
                </div>
                <div className="p-2 bg-neutral-200 dark:bg-slate-900 border border-gray-400 dark:border-gray-700 rounded">
                    <h2 className="dark:text-indigo-400 mb-2">Win condition code</h2>
                    <div>
                        <CodeDisplay code={winCondCode} />
                        <p>
                            This function checks if the board markers form a line. Draws if no lines found and all squares marked. Returns null to signify game continuation.
                        </p>
                    </div>
                </div>
            </div>

            
        </div>
    );
}

const minimaxCode = `import calculateWinner from './gameConditions'

function findBestMove(board) {
  let bestScore = -Infinity;
  let bestMove = -1;

  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      board[i] = 'O'; // Simulate the bot's move
      let score = minimax(board, 0, false, -Infinity, Infinity);
      board[i] = null; // Undo the move

      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  return bestMove;
}

function minimax(board, depth, isMaximizing, alpha, beta) {
  const scores = {
    X: -1,
    O: 1,
    draw: 0,
  };

  const result = calculateWinner(board);
  if (result !== null) {
    return scores[result];
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = 'O';
        let score = minimax(board, depth + 1, false, alpha, beta);
        board[i] = null;
        bestScore = Math.max(score, bestScore);
        alpha = Math.max(alpha, score);
        if (beta <= alpha) {
          break;
        }
      }
    }
    return bestScore - depth;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = 'X';
        let score = minimax(board, depth + 1, true, alpha, beta);
        board[i] = null;
        bestScore = Math.min(score, bestScore);
        beta = Math.min(beta, score);
        if (beta <= alpha) {
          break;
        }
      }
    }
    return bestScore + depth;
  }
}


export default findBestMove`

const winCondCode = `const calculateWinner = (squares) => {
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
  if (squares.every((square) => square !== null)) {
    return 'draw';
  }
  return null;
};

export default calculateWinner`

export default TicTacToeDemo