import React from 'react';
import type { ISquareProps } from '../interfaces';

const Square = React.memo(({ children, onSquare, position }: ISquareProps) => {
    return (
        <div
            className="square"
            onClick={() => onSquare(position)}
        >
            {children}
        </div>
    );
});

Square.displayName = 'Square';

export default Square;
