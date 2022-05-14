import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../service/auth';
import Database from '../../service/database';
import HabitAddBtn from '../../VAC/habit_add_btn/habit_add_btn';
import Habitlist from '../../VAC/habit_list/habit_list';
import HabitPreivew from '../../VAC/habit_preview/habit_preview';
import Logo from '../../VAC/logo/logo';
import SignOutBtn from '../../VAC/sign_out_btn/sign_out_btn';
import ThemeToggleBtn from '../../VAC/theme_toggle_btn/theme_toggle_btn';
import User from '../../VAC/user/user';
import Box, { IBoxes } from '../../VC/box/box';
import styles from './main.module.css';

export interface IUser{
    email: string,
    name: string
};


export interface IHabit{
    id: number,
    name: string,
    description: string,
    goal: string,
    boxesJSON: IBoxes,
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
            <div className={styles.userSection}>
                {user && <User db={db} isDark={isDark} user={user} habits={habits}/>}
                <Habitlist habits={habits} setHabits={setHabits} setSelectedHabit={setSelectedHabit}/>
                <HabitAddBtn isDark={isDark} habits={habits} setHabits={setHabits}/>
            </div>
            <div className={styles.previewSection}>
                {selectedHabit && <HabitPreivew habit={selectedHabit} />}
                {selectedHabit && <Box habit={selectedHabit} setHabits={setHabits} />}
            </div>
        </div>
    );
};

export default Main;