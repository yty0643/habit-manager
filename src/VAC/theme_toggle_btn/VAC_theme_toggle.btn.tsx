import React from 'react';
import styles from './theme_toggle_btn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { IProps } from './theme_toggle_btn';

const VACThemeToggleBtn = ({ isDark, onClick }: IProps) => {
    
    return (
        <button className={styles.btn} onClick={onClick}>
            {isDark ? <FontAwesomeIcon icon={faToggleOff} /> : <FontAwesomeIcon icon={faToggleOn} />}
        </button>
    );
};

export default VACThemeToggleBtn;