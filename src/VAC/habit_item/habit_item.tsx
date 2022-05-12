import React from 'react';
import Box from '../../VC/box/box';
import { IHabit } from '../../pages/main/main';
import { IDelHabit, IHandleBox, IonClick } from '../habit_list/habit_list';
import styles from './habit_item.module.css';

interface IProps{
    habit: IHabit,
    delHabit: IDelHabit,
    handleBox: IHandleBox,
    onClick: IonClick,
};

const HabitItem = ({ habit, delHabit, onClick, handleBox }: IProps) => {
    return (
        <li className={styles.habit} onClick={() => { onClick(habit) }}>
            <div className={styles.circle}></div>
        </li>
    );
};

export default React.memo(HabitItem);