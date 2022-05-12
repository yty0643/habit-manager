import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IBox, IBoxes } from '../box/box';
import Auth from '../../service/auth';
import Database from '../../service/database';
import HabitList from '../../VAC/habit_list/VAC_habit_list';
import Habit_add from '../../VAC/habit_add_btn/habit_add_btn';

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

export interface ISignOut{
    (): void;
}

const Habit = ({ auth, db }: { auth: Auth, db: Database }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<IUser>();
    const [habits, setHabits] = useState<IHabits>({});
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

    const delHabit: IDelHabit = (habit) => {
        setHabits(habits => {
            const temp = { ...habits };
            delete temp[habit.id];
            return temp;
        });
    };

    const handleBox: IHandleBox = (id, today, data) => {
        setHabits(habits => {
            const temp = { ...habits };
            const todayTemp = { ...temp[id].boxesJSON }
            todayTemp[today] = data;
            temp[id].boxesJSON = todayTemp;
            return temp;
        });
    };

    const signOut: ISignOut = () => {
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
        db.write(user.email, `user/${user.email}/`, habits);
    }, [habits]);
    
    return (
        <div>
            <div>
                <p>{user?.email}</p>
                <button onClick={signOut}>signOut</button>
            </div>
            <div>
                {/* <Habit_add
                    addHabit={addHabit}
                    addInpRef={addInpRef} /> */}
            </div>
            {/* <HabitList
                habits={habits}
                delHabit={delHabit}
                handleBox={handleBox} /> */}
        </div>
    );
};

export default Habit;