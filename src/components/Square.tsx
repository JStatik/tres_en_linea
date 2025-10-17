import type { ISquareProps } from '../interfaces';

const Square = ({ children, onSquare, position }: ISquareProps) => {
    return (
        <div
            className="square"
            onClick={() => onSquare(position)}
        >
            {children}
        </div>
    );
};

export default Square;
