import React, { useRef } from 'react';
import { IHabit, IHabits } from '../../pages/main/main';
import VACHabitAdd from './VAC_habit_add';

export interface IAddHabit{
    (): void;
};

const HabitAdd = ({ habits, setHabits }: { habits: IHabits, setHabits: React.Dispatch<React.SetStateAction<IHabits>> }) => {
    const addInpRef = useRef<HTMLInputElement>(null);
    const addHabit: IAddHabit = () => {
        const newHabit: IHabit = {
            id: Date.now(),
            name: addInpRef.current?.value || "",
            count: 0,
            boxesJSON: {},
        };
        setHabits(habits => {
            const temp = { ...habits };
            temp[newHabit.id] = newHabit;
            return temp;
        });
        addInpRef.current!.value = "";
    };

    return (
        <VACHabitAdd addHabit={addHabit} addInpRef={addInpRef} />
    )
}
export default HabitAdd;