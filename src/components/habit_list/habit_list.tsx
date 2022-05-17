import React from 'react';
import { IHabit, IHabits } from '../../pages/main/main';
import VACHabitlist from './VAC_habit_list';

export interface IonClick{
    (habit: IHabit): void;
};

const HabitList = ({ isDark, habits, setSelectedHabit }: { isDark: boolean, habits: IHabits, setSelectedHabit: React.Dispatch<React.SetStateAction<IHabit | null>> }) => {
    const onClick: IonClick = (habit) => {
        setSelectedHabit(habit);
    }

    return (
        <div>
            <VACHabitlist isDark={isDark} habits={habits} onClick={onClick} />
        </div>
    );
};

export default React.memo(HabitList);