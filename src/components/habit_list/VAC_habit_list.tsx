import React from 'react';
import HabitItem from '../habit_item/habit_item';
import { IHabits } from '../../pages/main/main';
import styles from './habit_list.module.css';
import { IonClick } from './habit_list';

const VACHabitlist = ({ isDark, habits, onClick }: { isDark: boolean, habits: IHabits, onClick: IonClick }) => {
    return (
        <ul className={styles.habits}>
            {Object.keys(habits).map(key => {
                return (
                    <HabitItem
                        key={key}
                        isDark={isDark}
                        habit={habits[Number(key)]}                   
                        onClick={onClick} />
                )
            })}
        </ul>
    );
};

export default React.memo(VACHabitlist);