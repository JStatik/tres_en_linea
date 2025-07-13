import type { ETurns, EWinner } from '../enums';
import { WINNER, WINNER_COMBINATIONS } from '../config';

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
