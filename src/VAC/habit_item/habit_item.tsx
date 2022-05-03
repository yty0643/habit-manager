import React from 'react';
import Box from '../../VC/box/box';
import { IHabit, IDelHabit, IHandleBox } from '../../VC/habit/habit';

interface IProps{
    habit: IHabit,
    delHabit: IDelHabit,
    handleBox: IHandleBox,
};

const HabitItem = ({ habit, delHabit, handleBox }: IProps) => {
    return (
        <li>
            <p>{habit?.id}</p>
            <p>{habit?.name}</p>
            <p>{habit?.count}</p>
            <button onClick={() => {
                delHabit(habit);
            }}>del</button>
            <Box id={habit.id} boxesJSON={habit.boxesJSON} handleBox={handleBox} />
        </li>
    );
};

export default React.memo(HabitItem);