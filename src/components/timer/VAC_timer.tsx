import React from 'react';
import styles from './timer.tsx.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faStop } from '@fortawesome/free-solid-svg-icons';

const VACTimer = ({ isDark, isTimer, timeToS, onClick }: { isDark: boolean, isTimer: boolean, timeToS: string, onClick: () => void }) => {
    
    return (
        <div className={`${styles.timer} ${isDark && styles.dark}`}>
            <button className={`${styles.btn} ${isDark && styles.dark}`} onClick={onClick}>
                {isTimer ? <FontAwesomeIcon icon={faStop} /> : <FontAwesomeIcon icon={faPlay} />}
            </button>
            <p className={styles.time}>{timeToS}</p>
        </div>
    );
};

export default React.memo(VACTimer);