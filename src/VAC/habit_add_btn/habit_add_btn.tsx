import React, { useState } from 'react';
import { IHabit, IHabits } from '../../pages/main/main';
import VACHabitAddBtn from './VAC_habit_add_btn';
import HabitAddForm from '../habit_add_form/habit_add_form';

export interface IOnClick{
    (): void;
}

const HabitAddBtn = ({ isDark, habits, setHabits }: { isDark: boolean, habits: IHabits, setHabits: React.Dispatch<React.SetStateAction<IHabits>> }) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const onClick: IOnClick = () => {
        setIsActive(true);
    }

    

    return (
        <>
            {isActive ? <HabitAddForm isDark={isDark} habits={habits} setIsActive={setIsActive} setHabits={setHabits} /> : <VACHabitAddBtn isDark={isDark} onClick={onClick} />}
        </>
    );
};

export default HabitAddBtn;