import React from 'react';
import { IProps } from '../../pages/main/main';
import HabitItem from '../habit_item/habit_item';
import HabitAdd from '../../coponent/habit_add/habit_add';

const HabitList = ({ habits, addInpRef, addHabit, delHabit } : IProps) => {
    return (
        <div>
            <ul>
                {Object.keys(habits).map(key => {
                    return (
                        <HabitItem key={key}
                            habit={habits[Number(key)]}
                                                        delHabit={delHabit}/>
                    )
                })}
            </ul>
            <HabitAdd addHabit={addHabit}
                addInpRef={addInpRef}
            />
        </div>
    )
}

export default HabitList;