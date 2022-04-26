import React, { useRef, useState } from 'react';
import HabitList from '../../coponent/habit_list/habit_list';

export interface IHabit{
    id: number,
    name: string,
    count: number,
}

export interface IHabits{
    [key: number]:IHabit
}

export interface IADHabit{
    (habit?: IHabit): void;
}

export interface IProps{
    habits: IHabits,
    addInpRef: React.RefObject<HTMLInputElement>,
    addHabit: IADHabit,
    delHabit: IADHabit,
}

const Main = () => {
    const [habits, setHabits] = useState<IHabits>({});
    const addInpRef = useRef<HTMLInputElement>(null);
    
    const props: IProps = {
        habits,
        addInpRef,
        addHabit: () => {
            setHabits(habits => {
                if (!addInpRef.current) return habits;
                const temp = { ...habits };
                const newHabit: IHabit = {
                    id: Date.now(),
                    name:addInpRef.current.value,
                    count:0,
                }
                temp[newHabit.id] = newHabit;
                return temp;
            });
        },
        delHabit: (habit) => {
            setHabits(habits => {
                if (!habit) return habits;
                const temp = { ...habits };
                delete temp[habit.id];
                return temp;
            });
        },
    };

    return (
        <div>
            <HabitList {...props}/>
        </div>
    )
}

export default Main;