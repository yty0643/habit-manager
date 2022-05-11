import React from 'react';
import { IHabit, IHabits } from '../../pages/main/main';
import { IBox } from '../../VC/box/box';
import VACHabitlist from './VAC_habit_list';

export interface IDelHabit{
    (habit: IHabit): void;
};

export interface IHandleBox{
    (id: number, today: string, boxes: IBox): void;
};

const HabitList = ({ habits, setHabits }: { habits: IHabits, setHabits: React.Dispatch<React.SetStateAction<IHabits>> }) => {
    const delHabit: IDelHabit = (habit) => {
        setHabits(habits => {
            const temp = { ...habits };
            delete temp[habit.id];
            return temp;
        });
    };

    const handleBox: IHandleBox = (id, today, data) => {
        setHabits(habits => {
            const temp = { ...habits };
            const todayTemp = { ...temp[id].boxesJSON }
            todayTemp[today] = data;
            temp[id].boxesJSON = todayTemp;
            return temp;
        });
    };

    return (
        <div>
            <VACHabitlist habits={habits} delHabit={delHabit} handleBox={handleBox} />
        </div>
    );
};

export default HabitList;