export const TURNS = {
    X: '×',
    O: '○'
} as const;

export const WINNER = {
    ...TURNS,
    TIE: 'TIE',
    NONE: null
} as const;

export const WINNER_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
