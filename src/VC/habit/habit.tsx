import React, { useRef, useState } from 'react';
import HabitList from '../../VAC/habit_list/habit_list';

export interface IHabit{
    id: number,
    name: string,
    count: number,
}

export interface IHabits{
    [key: number]:IHabit
}

export interface IAddHabit{
    (): void;
}

export interface IDelHabit{
    (habit: IHabit): void;
}

export interface IProps{
    habits: IHabits,
    addInpRef: React.RefObject<HTMLInputElement>,
    addHabit: IAddHabit,
    delHabit: IDelHabit,
}
const Habit = () => {
    const [habits, setHabits] = useState<IHabits>({});
    const addInpRef = useRef<HTMLInputElement>(null);
    
    const props: IProps = {
        habits,
        addInpRef,
        addHabit: () => {
            const newHabit: IHabit = {
                id: Date.now(),
                name: addInpRef.current?.value || "",
                count: 0,
            }
            setHabits(habits => {
                const temp = { ...habits };
                temp[newHabit.id] = newHabit;
                return temp;
            })
            addInpRef.current!.value = "";
        },
        delHabit: (habit) => {
            setHabits(habits => {
                const temp = { ...habits };
                delete temp[habit.id];
                return temp;
            });
        },
    };
    
    return (
        <div>
            <HabitList {...props} />
        </div>
    )
}

export default Habit;