import React from 'react';
import styles from './habit_add_btn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IOnClick } from './habit_add_btn';

interface Iprops{
    isDark: boolean,
    onClick: IOnClick,
}

const VACHabitAddBtn = ({ isDark, onClick }: Iprops) => {
    return (
        <button className={`${styles.btn} ${isDark && styles.dark}`} onClick={onClick}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    );
};

export default React.memo(VACHabitAddBtn);