import React, { useRef, useState } from 'react';
import HabitList from '../../VAC/habit_list/habit_list';
import { IBox, IBoxes } from '../box/box';

export interface IHabit{
    id: number,
    name: string,
    count: number,
    boxesJSON: IBoxes,
};

export interface IHabits{
    [key: number]:IHabit
};

export interface IAddHabit{
    (): void;
};

export interface IDelHabit{
    (habit: IHabit): void;
};

export interface IHandleBox{
    (id: number, today: string, boxes: IBox): void;
};

export interface IProps{
    habits: IHabits,
    addInpRef: React.RefObject<HTMLInputElement>,
    addHabit: IAddHabit,
    delHabit: IDelHabit,
    handleBox: IHandleBox,
};

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
                boxesJSON: {},
            };
            setHabits(habits => {
                const temp = { ...habits };
                temp[newHabit.id] = newHabit;
                return temp;
            });
            addInpRef.current!.value = "";
        },
        delHabit: (habit) => {
            setHabits(habits => {
                const temp = { ...habits };
                delete temp[habit.id];
                return temp;
            });
        },
        handleBox: (id, today, data) => {
            setHabits(habits => {
                const temp = { ...habits };
                const todayTemp = { ...temp[id].boxesJSON }
                todayTemp[today] = data;
                temp[id].boxesJSON = todayTemp;
                //이부분에서 db에 write하면 되겠다.
                return temp;
            })
        }
    };
    
    return <HabitList {...props} />
};

export default Habit;