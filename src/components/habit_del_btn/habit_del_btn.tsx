import React from 'react';
import { IHabit, IHabits } from '../../pages/main/main';
import VACHabitDelBtn from './VAC_habit_del_btn';

export interface IOnClick{
    (): void
};

const HabitDelBtn = ({ isDark, habit, setHabits, setSelectedHabit }: { isDark: boolean, habit: IHabit, setHabits: React.Dispatch<React.SetStateAction<IHabits>>, setSelectedHabit: React.Dispatch<React.SetStateAction<IHabit | null>> }) => {
    const onClick: IOnClick = () => {
        setHabits(habits => {
            const temp = { ...habits };
            delete temp[habit.id]
            setSelectedHabit(null);
            return temp;
        })
    };

    return (
        <VACHabitDelBtn isDark={isDark} onClick={onClick}/>
    );
};

export default HabitDelBtn;