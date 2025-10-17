import type { ETurns } from '../enums';

export interface IResetButtonProps {
    onReset: () => void
}

export interface ISquareProps {
    children: ETurns | null,
    onSquare: (_position: number) => void,
    position: number
}

export interface ITurnProps {
    children: ETurns,
    isSelected?: boolean
}

export interface IArraysEqualParams {
    board: (ETurns | null)[],
    prevBoard: (ETurns | null)[]
}
