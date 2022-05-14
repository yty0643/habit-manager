import React from 'react';
import { IHabit, IHabits } from '../../pages/main/main';
import { IBox } from '../../VC/box/box';
import VACHabitlist from './VAC_habit_list';

export interface IDelHabit{
    (habit: IHabit): void;
};

export interface IonClick{
    (habit: IHabit): void;
};

export interface IHandleBox{
    (id: number, today: string, boxes: IBox): void;
};

const HabitList = ({ isDark, habits, setHabits, setSelectedHabit }: { isDark: boolean, habits: IHabits, setHabits: React.Dispatch<React.SetStateAction<IHabits>>, setSelectedHabit: React.Dispatch<React.SetStateAction<IHabit | null>> }) => {
    const delHabit: IDelHabit = (habit) => {
        setHabits(habits => {
            const temp = { ...habits };
            delete temp[habit.id];
            return temp;
        });
    };

    const onClick: IonClick = (habit) => {
        setSelectedHabit(habit);
    }

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
            <VACHabitlist isDark={isDark} habits={habits} delHabit={delHabit} onClick={onClick} handleBox={handleBox} />
        </div>
    );
};

export default HabitList;