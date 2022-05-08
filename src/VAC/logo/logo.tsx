import React from 'react';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './logo.module.css';

const Logo = ({ }) => {
    
    return (
        <button className={styles.logo}>
            <FontAwesomeIcon icon={faListCheck} />
        </button>
    )
}

export default Logo;