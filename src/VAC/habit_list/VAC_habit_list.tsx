import React from 'react';
import HabitItem from '../habit_item/habit_item';
import { IDelHabit, IHabits, IHandleBox } from '../../VC/habit/habit';
import styles from './habit_list.module.css';

const VACHabitlist = ({ habits, delHabit, handleBox }: { habits: IHabits, delHabit: IDelHabit, handleBox: IHandleBox }) => {
    return (
        <div>
            <ul className={styles.habits}>
                {Object.keys(habits).map(key => {
                    return (
                        <HabitItem
                            key={key}
                            habit={habits[Number(key)]}
                            delHabit={delHabit}
                            handleBox={handleBox} />
                    )
                })}
            </ul>
        </div>
    );
};

export default React.memo(VACHabitlist);