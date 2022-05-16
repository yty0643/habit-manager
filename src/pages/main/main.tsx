import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../service/auth';
import Database from '../../service/database';
import HabitAddBtn from '../../components/habit_add_btn/habit_add_btn';
import Habitlist from '../../components/habit_list/habit_list';
import HabitPreivew from '../../components/habit_preview/habit_preview';
import Logo from '../../components/logo/logo';
import SignOutBtn from '../../components/sign_out_btn/sign_out_btn';
import ThemeToggleBtn from '../../components/theme_toggle_btn/theme_toggle_btn';
import User from '../../components/user/user';
import BoxList, { IBoxes } from '../../components/box_list/box_list';
import styles from './main.module.css';
import Timer from '../../components/timer/timer';

export interface IUser{
    email: string,
    name: string
};


export interface IHabit{
    id: number,
    name: string,
    description: string,
    goal: string,
    boxesJSON: IBoxes|null,
    since: string,
};

export interface IHabits{
    [key: number]: IHabit
};

const Main = ({ auth, db }: { auth: Auth, db: Database }) => {
    const navigate = useNavigate();
    const [isDark, setIsDark] = useState<boolean>(false);
    const [user, setUser] = useState<IUser>();
    const [habits, setHabits] = useState<IHabits>({});
    const [selectedHabit, setSelectedHabit] = useState<IHabit|null>(null);

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
        db
            .read(user.email, `user/${user.email}/habits`)
            .then(res => setHabits(res));
        
    }, [user]);

    useEffect(() => {
        if (!user) return;
        db.write(user.email, `user/${user.email}/habits/`, habits);
    }, [habits]);


    // const delHabit: IDelHabit = (habit) => {
    //     setHabits(habits => {
    //         const temp = { ...habits };
    //         delete temp[habit.id];
    //         return temp;
    //     });
    // };

    return (
        <div className={`${styles.main} ${isDark && styles.dark}`}>
            <div className={styles.header}>
                <div>
                    <Logo isDark={true}/>
                </div>
                <div className={styles.btns}>
                    <ThemeToggleBtn isDark={isDark} setIsDark={setIsDark}/>
                    <SignOutBtn auth={auth} />
                </div>
            </div>
            <div className={`${styles.userSection} ${isDark && styles.dark}`}>
                {user && <User db={db} isDark={isDark} user={user} habits={habits}/>}
                <Habitlist isDark={isDark} habits={habits} setHabits={setHabits} setSelectedHabit={setSelectedHabit}/>
                <HabitAddBtn isDark={isDark} habits={habits} setHabits={setHabits}/>
            </div>
            <div className={`${styles.previewSection} ${isDark && styles.dark}`}>
                <div>
                    {selectedHabit && <Timer isDark={isDark} habit={selectedHabit} setHabits={setHabits} setSelectedHabit={setSelectedHabit} />}
                    {selectedHabit && <HabitPreivew isDark={isDark} habit={selectedHabit} />}
                    {selectedHabit && <BoxList isDark={isDark} habit={selectedHabit} />}
                </div>
            </div>
            <div className={`${styles.footer} ${isDark && styles.dark}`}>
                footer
            </div>
        </div>
    );
};

export default Main;