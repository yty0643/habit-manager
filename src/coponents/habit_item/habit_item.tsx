import React from 'react';
import { IHabit, IDelHabit } from '../../pages/main/main';

interface Iprops{
    habit: IHabit,
    delHabit: IDelHabit,
}

const HabitItem = ({ habit, delHabit }: Iprops) => {
    
    return (
        <li>
            <p>{habit?.id}</p>
            <p>{habit?.name}</p>
            <p>{habit?.count}</p>
            <button onClick={() => {
                delHabit(habit);
            }}>del</button>
        </li>
    )
}

export default HabitItem;