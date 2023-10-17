'use client'
import React, { use, useState } from "react"
import calculateWinner from './gameConditions'
import findBestMove from './minimax'

const GameBoard = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [p1Turn, setTurn] = useState(true)
    const [botMode, setBotMode] = useState(false)

    const winner = calculateWinner(board);
    const status = winner
        ? `Winner: ${winner}`
        : board.every((square) => square) // Check for a draw
            ? 'It\'s a draw!'
            : `Start Game`; // Assuming 'X' <starts></starts>

    const playerAction = (index: number) => {

        if (board[index] === null && !calculateWinner(board)) {
            const updatedBoard = [...board];
            if (botMode) {
                updatedBoard[index] = 'X'
            }
            else {
                updatedBoard[index] = p1Turn ? 'X' : 'O';
            }
            setBoard(updatedBoard);
            setTurn(!p1Turn);

            if (botMode) {
                // Check if it's the bot's turn and the game isn't over
                const winner = calculateWinner(updatedBoard);
                if (!winner) {
                    const botMove = findBestMove(updatedBoard);
                    updatedBoard[botMove] = '🤖';
                    setBoard(updatedBoard);
                    setTurn(true);
                }
            }
        }

    }

    const renderSquare = (index: number) => (
        <button
            className="sm:w-16 sm:h-16 w-10 h-10"
            onClick={() => playerAction(index)}
            disabled={board[index] !== null || winner === 'draw' || winner === 'X' || winner === 'O'}
        >
            {board[index]}
        </button>
    )

    const toggleBotMode = () => {
        if (botMode) {
            return (
                <div className="items-center justify-center font-bold">
                    <div className="bg-stone-200 text-center dark:bg-slate-800 p-2 rounded-lg">🤖<code className=" text-red-500">ON</code></div>
                </div>
            );
        } else {
            return (
                <div className="items-center justify-center font-bold">
                    <div className="bg-stone-200 text-center dark:bg-slate-800 p-2 rounded-lg">🧑<code className=" text-yellow-600">OFF</code></div>
                </div>
            );
        }
    };



    return (
        <div>
            <div className="inline-grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="inline-grid grid-cols-3 gap-2">
                    <div className="sm:w-16 sm:h-16 w-10 h-10 bg-white text-center dark:bg-slate-900 flex items-center justify-center border border-gray-400 dark:border-gray-700 text-3xl font-bold">{renderSquare(0)}</div>
                    <div className="sm:w-16 sm:h-16 w-10 h-10 bg-white text-center dark:bg-slate-900 flex items-center justify-center border border-gray-400 dark:border-gray-700 text-3xl font-bold">{renderSquare(1)}</div>
                    <div className="sm:w-16 sm:h-16 w-10 h-10 bg-white text-center dark:bg-slate-900 flex items-center justify-center border border-gray-400 dark:border-gray-700 text-3xl font-bold">{renderSquare(2)}</div>
                    <div className="sm:w-16 sm:h-16 w-10 h-10 bg-white text-center dark:bg-slate-900 flex items-center justify-center border border-gray-400 dark:border-gray-700 text-3xl font-bold">{renderSquare(3)}</div>
                    <div className="sm:w-16 sm:h-16 w-10 h-10 bg-white text-center dark:bg-slate-900 flex items-center justify-center border border-gray-400 dark:border-gray-700 text-3xl font-bold">{renderSquare(4)}</div>
                    <div className="sm:w-16 sm:h-16 w-10 h-10 bg-white text-center dark:bg-slate-900 flex items-center justify-center border border-gray-400 dark:border-gray-700 text-3xl font-bold">{renderSquare(5)}</div>
                    <div className="sm:w-16 sm:h-16 w-10 h-10 bg-white text-center dark:bg-slate-900 flex items-center justify-center border border-gray-400 dark:border-gray-700 text-3xl font-bold">{renderSquare(6)}</div>
                    <div className="sm:w-16 sm:h-16 w-10 h-10 bg-white text-center dark:bg-slate-900 flex items-center justify-center border border-gray-400 dark:border-gray-700 text-3xl font-bold">{renderSquare(7)}</div>
                    <div className="sm:w-16 sm:h-16 w-10 h-10 bg-white text-center dark:bg-slate-900 flex items-center justify-center border border-gray-400 dark:border-gray-700 text-3xl font-bold">{renderSquare(8)}</div>
                </div>
                <div>
                    <div className=" p-3 bg-white text-center dark:bg-slate-900 inline-grid gap-2 items-center justify-center border border-gray-400 dark:border-gray-700 font-bold">
                        <div className=" text-purple-400">{status}</div>
                        <button
                            className="bg-stone-300 text-center dark:bg-slate-700 p-2 rounded-lg"
                            onClick={() => {
                                setBotMode(!botMode);
                                setBoard(Array(9).fill(null));
                            }}
                            >Toggle Bot Mode</button>
                        {toggleBotMode()}
                        <button
                            className=" text-purple-400"
                            onClick={() => (
                                setBoard(
                                    Array(9).fill(null)
                                )
                            )}>Reset board</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GameBoard