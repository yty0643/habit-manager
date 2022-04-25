import React, { useState } from 'react';
import HabitList from '../../coponent/habit_list/habit_list';

export interface IHabit{
    id: number,
    name: string,
    count: number,
}

export interface IHabits{
    [key:number]:IHabit
}

export interface IADHabit{
    (habit: IHabit): void;
}



const Main = () => {
    const [habits, setHabits] = useState<IHabits>({});
    const props:{habits: IHabits, addHabit: IADHabit, delHabit: IADHabit} = {
        habits,
        addHabit: (habit: IHabit) => {
            setHabits(habits => {
                const temp = { ...habits };
                temp[habit.id] = habit;
                return temp;
            })
        },
        delHabit: (habit: IHabit) => {
            setHabits(habits => {
                const temp = { ...habits }
                delete temp[habit.id];
                return temp;
            })
        },
    }

    return (
        <div>
            <HabitList {...props}/>
        </div>
    )
}

export default Main;