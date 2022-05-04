import React, { useEffect, useRef, useState } from 'react';
import { IUser } from '../../pages/main/main';
import Database from '../../service/database';
import HabitList from '../../VAC/habit_list/habit_list';
import { IBox, IBoxes } from '../box/box';

export interface IHabit{
    id: number,
    name: string,
    count: number,
    boxesJSON: IBoxes,
};

export interface IHabits{
    [key: number]: IHabit
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

const Habit = ({ db, user }: { db: Database, user: IUser }) => {
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
                return temp;
            });
        },
    };

    useEffect(() => {
        db.write(user.id, habits);
    }, [habits]);
    
    return <HabitList {...props} />
};

export default Habit;