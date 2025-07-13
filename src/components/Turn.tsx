import type { ITurnProps } from '../interfaces';

const Turn = ({ children, isSelected }: ITurnProps) => {
    return (
        <div className={`square ${ (isSelected) ? 'is-selected' : '' }`}>
            {children}
        </div>
    );
};

export default Turn;
