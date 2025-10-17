/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import type { ETurns, EWinner } from './enums';
import { TURNS, WINNER } from './config';
import { arraysEqual, checkWinner, onSetBoard, onSetTurn } from './utils';
import { ResetButton, Square, Turn } from './components';

const App = () => {
    const [turn, setTurn] = useState<ETurns>(onSetTurn);
    const [board, setBoard] = useState<(ETurns | null)[]>(onSetBoard);
    const [prevBoard, setPrevBoard] = useState<(ETurns | null)[]>(board);

    const [winner, setWinner] = useState<EWinner>((): EWinner => {
        const newWinner: EWinner = checkWinner(board);

        if(newWinner !== WINNER.NONE && newWinner !== WINNER.TIE) {
            confetti({
                particleCount: 75,
                spread: 70
            });
        }

        return newWinner;
    });

    if(arraysEqual({ board, prevBoard }) === false) {
        setPrevBoard(board);

        setWinner(() => {
            const newWinner: EWinner = checkWinner(board);

            if(newWinner !== WINNER.NONE && newWinner !== WINNER.TIE) {
                confetti({
                    particleCount: 75,
                    spread: 70
                });
            }

            return newWinner;
        });
    }

    const onReset = (): void => {
        setWinner(WINNER.NONE);
        setBoard(Array(9).fill(null));
        setTurn(Math.round(Math.random()) === 0 ? TURNS.X : TURNS.O);

        localStorage.removeItem('turn');
        localStorage.removeItem('board');
    };

    const onSquare = (position: number): void => {
        if(board[position] || winner !== WINNER.NONE)
            return;

        setBoard(board => {
            const newBoard: (ETurns | null)[] = [...board];

            newBoard[position] = turn;
            localStorage.setItem('board', JSON.stringify(newBoard));

            return [...newBoard];
        });

        setTurn(turn => {
            const newTurn: ETurns = (turn === TURNS.X)
                ? TURNS.O
                : TURNS.X;

            localStorage.setItem('turn', newTurn);
            return newTurn;
        });
    };

    return (
        <main className="board">
            <h1>Tres en línea</h1>

            <ResetButton onReset={onReset} />

            <section className="game">
                {board.map((value: ETurns | null, index: number): React.JSX.Element => (
                    <Square
                        key={index}
                        children={value}
                        position={index}
                        onSquare={onSquare}
                    />
                ))}
            </section>

            <section className="turn">
                <Turn
                    children={TURNS.X}
                    isSelected={(turn === TURNS.X)}
                />

                <Turn
                    children={TURNS.O}
                    isSelected={(turn === TURNS.O)}
                />
            </section>

            {winner !== WINNER.NONE
                &&
            <section className="winner">
                <div className="text">
                    <h2>{(winner === WINNER.TIE) ? 'Empate' : 'Ganó'}</h2>

                    {(winner !== WINNER.TIE)
                        &&
                    <header className="win">
                        <Turn
                            isSelected
                            children={winner}
                        />
                    </header>}

                    <footer>
                        <ResetButton onReset={onReset} />
                    </footer>
                </div>
            </section>}
        </main>
    );
};

export default App;
