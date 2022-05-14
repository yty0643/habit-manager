import React from 'react';
import { IHabit } from '../../pages/main/main';
import { IDelHabit, IHandleBox, IonClick } from '../habit_list/habit_list';
import styles from './habit_item.module.css';

interface IProps{
    isDark: boolean,
    habit: IHabit,
    delHabit: IDelHabit,
    handleBox: IHandleBox,
    onClick: IonClick,
};

const HabitItem = ({ isDark, habit, delHabit, onClick, handleBox }: IProps) => {
    const today = new Date().toISOString().split('T')[0];
    const totalTime = (habit.boxesJSON && (habit.boxesJSON[today]?.totalTime / 1000 / 3600)) || 0;
    const percentage = Math.floor(totalTime / Number(habit.goal) * 100);
    return (
        <li className={`${styles.item} ${isDark && styles.dark}`}>
            <div className={`${styles.habit} ${isDark && styles.dark}`} onClick={() => { onClick(habit) }}>
            <p className={`${styles.percent} ${isDark && styles.dark}`}>{percentage}%</p>
            <div className={`${styles.circle} ${isDark && styles.dark}`}></div>
            </div>
            <p className={styles.description}>{habit.name}</p>
        </li>
    );
};

export default React.memo(HabitItem);