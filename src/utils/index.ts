import type { IArraysEqualParams } from '../interfaces';
import type { ETurns, EWinner } from '../enums';
import { TURNS, WINNER, WINNER_COMBINATIONS } from '../config';

export const arraysEqual = ({ board, prevBoard }: IArraysEqualParams): boolean => {
    if(board.length !== prevBoard.length)
        return false;

    for(let i = 0; i < board.length; i++) {
        if(board[i] !== prevBoard[i])
            return false;
    }

    return true;
};

export const checkWinner = (board: (ETurns | null)[]): EWinner => {
    for(const combination of WINNER_COMBINATIONS) {
        const [a, b, c]: number[] = combination;

        if(
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        )
            return board[a];
    }

    if(board.every((square: ETurns | null): boolean => square !== null))
        return WINNER.TIE;

    return WINNER.NONE;
};

export const onSetBoard = (): (ETurns | null)[] => {
    try{
        const board: string | null = localStorage.getItem('board');
        const boardParsed = board && JSON.parse(board);

        if(Array.isArray(boardParsed) && boardParsed.length === 9)
            return boardParsed;
        else
            return Array(9).fill(null);
    } catch(_e) {
        return Array(9).fill(null);
    }
};

export const onSetTurn = (): ETurns => {
    const turn: string | null = localStorage.getItem('turn');

    if(turn === TURNS.X || turn === TURNS.O)
        return turn;
    else {
        return (Math.round(Math.random()) === 0)
            ? TURNS.X
            : TURNS.O;
    }
};
