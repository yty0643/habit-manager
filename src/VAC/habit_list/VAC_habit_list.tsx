import React from 'react';
import HabitItem from '../habit_item/habit_item';
import { IDelHabit, IHabits, IHandleBox } from '../../VC/habit/habit';
import styles from './habit_list.module.css';
import { IonClick } from './habit_list';

const VACHabitlist = ({ habits, delHabit, onClick, handleBox }: { habits: IHabits, delHabit: IDelHabit, onClick: IonClick, handleBox: IHandleBox }) => {
    return (
        <div>
            <ul className={styles.habits}>
                {Object.keys(habits).map(key => {
                    return (
                        <HabitItem
                            key={key}
                            habit={habits[Number(key)]}
                            delHabit={delHabit}
                            onClick={onClick}
                            handleBox={handleBox} />
                    )
                })}
            </ul>
        </div>
    );
};

export default React.memo(VACHabitlist);