import type { IResetButtonProps } from '../interfaces';

const ResetButton = ({ onReset }: IResetButtonProps) => {
    return (
        <button
            type="button"
            onClick={onReset}
        >
            Empezar de nuevo
        </button>
    );
};

export default ResetButton;
