import React from 'react';
import { IOnClick } from './habit_del_btn';
import styles from './habit_del_btn.module.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VACHabitDelBtn = ({ isDark, onClick }: { isDark: boolean, onClick: IOnClick }) => {
    return (
        <div className={styles.btn} onClick={onClick}>
            <div className={`${styles.icon} ${isDark && styles.dark}`}>
                <FontAwesomeIcon icon={faTrash} />
            </div>
            delete this habit
        </div>
    );
};

export default VACHabitDelBtn;