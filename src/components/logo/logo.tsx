import React from 'react';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './logo.module.css';

const Logo = ({ isDark }: { isDark: boolean }) => {
    
    return (
        <button className={`${styles.logo} ${isDark && styles.dark}`}>
            <FontAwesomeIcon icon={faListCheck} />
        </button>
    );
};

export default Logo;