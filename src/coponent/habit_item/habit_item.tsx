import React from 'react';
import { IHabit, IADHabit } from '../../pages/main/main';

const HabitItem = ({ habit, delHabit }: { habit: IHabit, delHabit : IADHabit }) => {
    
    return (
        <div>
            <p>{habit?.id}</p>
            <p>{habit?.name}</p>
            <p>{habit?.count}</p>
        </div>
    )
}

export default HabitItem;