import React, { useEffect, useState } from 'react';
import { IHabit, IHabits } from '../../pages/main/main';
import VACHabitAddForm from './VAC_habit_add_form';

export interface IOnClick{
    (event: any): void;
}

export interface IOnChange{
    (event: any): void;
}


const HabitAddForm = ({ isDark, habits, setIsActive, setHabits }: { isDark: boolean, habits: IHabits, setIsActive:React.Dispatch<React.SetStateAction<boolean>>, setHabits: React.Dispatch<React.SetStateAction<IHabits>> }) => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [goal, setGoal] = useState<string>("");
    const [isName, setIsName] = useState<boolean>(false);
    const [isDescription, setIsDescription] = useState<boolean>(false);
    const [isGoal, setIsGoal] = useState<boolean>(false);
    const [isCheck, setIsCheck] = useState<boolean>(false);

    const onClick: IOnClick = (event) => {
        event.preventDefault();
        const newHabit: IHabit = {
            id: Date.now(),
            name: name,
            description: description,
            goal: goal,
            boxesJSON: {},
        };
        console.log(newHabit);
        setHabits(habits => {
            const temp = { ...habits };
            temp[newHabit.id] = newHabit;
            return temp;
        });
        setIsActive(false);
    };

    const exit:IOnClick = (event) => {
        event.preventDefault();
        setIsActive(false);
    }

    const onChange: IOnChange = (event) => {
        const value = event.target.value;
        
        switch (event.target.id) {
            case "name":
                setName(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "goal":
                if (Number(value)) {
                    setGoal(value);
                } else {
                    event.target.value = "";
                    setGoal("");
                }
                break;
        };
    };

    useEffect(() => {
        if (!name) setIsName(false);
        else setIsName(true);
        if (!description) setIsDescription(false);
        else setIsDescription(true);
        if (!goal) setIsGoal(false);
        else setIsGoal(true);
    }, [name, description, goal]);

    useEffect(() => { 
        if (isName && isDescription && isGoal) setIsCheck(true);
        else setIsCheck(false);
    }, [isName, isDescription, isGoal]);

    return (
        <VACHabitAddForm isDark={isDark} isCheck={isCheck} isName={isName} isDescription={isDescription} isGoal={isGoal} onClick={onClick} exit={exit} onChange={onChange} />
    );
};

export default HabitAddForm;