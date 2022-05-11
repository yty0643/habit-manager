import React from 'react';
import Box from '../../VC/box/box';
import { IHabit, IDelHabit, IHandleBox } from '../../VC/habit/habit';
import styles from './habit_item.module.css';

interface IProps{
    habit: IHabit,
    delHabit: IDelHabit,
    handleBox: IHandleBox,
};

const HabitItem = ({ habit, delHabit, handleBox }: IProps) => {
    return (
        <li className={styles.habit}>
            
        </li>
    );
};

export default React.memo(HabitItem);