import React from 'react';
import { IADHabit, IHabits } from '../../pages/main/main';
import HabitItem from '../habit_item/habit_item';
import HabitAdd from '../../coponent/habit_add/habit_add';

const HabitList = ({ habits, addHabit, delHabit  } : { habits : IHabits, addHabit : IADHabit, delHabit : IADHabit }) => {
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
            <HabitAdd addHabit={addHabit} />
        </div>
    )
}

export default HabitList;