import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IBox, IBoxes } from '../box/box';
import Auth from '../../service/auth';
import Database from '../../service/database';
import HabitList from '../../VAC/habit_list/habit_list';

export interface IUser{
    email: string,
    name: string
};

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

const Habit = ({ auth, db }: { auth: Auth, db: Database }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<IUser>();
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

    const signOut = () => {
        auth
            .signOut()
            .then(() => {
                navigate('/');
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        auth
            .getUser()
            .then((res: any) => {
                setUser({
                    email: res.providerData[0].email.split('.')[0],
                    name: res.reloadUserInfo.displayName,
                });
            })
            .catch((error: any) => {
                console.log(error);
                navigate('/');
            });
    }, []);

    useEffect(() => {
        if (!user) return;
        db.write(user.email, habits);
    }, [habits]);
    
    return (
        <div>
            <p>{user?.email}</p>
            <button onClick={signOut}>signOut</button>
            <HabitList {...props} />
        </div>
    );
};

export default Habit;