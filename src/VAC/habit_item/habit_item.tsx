import React from 'react';
import Box from '../../VC/box/box';
import { IHabit, IDelHabit } from '../../VC/habit/habit';

interface IProps{
    habit: IHabit,
    delHabit: IDelHabit,
}

const HabitItem = ({ habit, delHabit }: IProps) => {
    return (
        <li>
            <p>{habit?.id}</p>
            <p>{habit?.name}</p>
            <p>{habit?.count}</p>
            <button onClick={() => {
                delHabit(habit);
            }}>del</button>
            <Box />
        </li>
    )
}

export default React.memo(HabitItem);