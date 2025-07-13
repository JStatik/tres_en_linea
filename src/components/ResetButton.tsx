import React from 'react';
import type { IResetButtonProps } from '../interfaces';

const ResetButton = React.memo(({ onReset }: IResetButtonProps) => {
    return (
        <button
            type="button"
            onClick={onReset}
        >
            Empezar de nuevo
        </button>
    );
});

ResetButton.displayName = 'ResetButton';

export default ResetButton;
