import React, { useState } from 'react';
import VACThemeToggleBtn from './VAC_theme_toggle.btn';

export interface IProps{
    isDark: boolean,
    onClick: { (): void }
};

const ThemeToggleBtn = ({ isDark, setIsDark }: { isDark: boolean, setIsDark: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const props: IProps = {
        isDark,
        onClick: () => {
            setIsDark(isDark => !isDark);
        },
    };

    return (
        <VACThemeToggleBtn {...props} />
    );
};

export default ThemeToggleBtn;