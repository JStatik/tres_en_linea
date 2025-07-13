import { TURNS, WINNER } from '../config';

export type ETurns = (typeof TURNS)[keyof typeof TURNS];
export type EWinner = (typeof WINNER)[keyof typeof WINNER];
