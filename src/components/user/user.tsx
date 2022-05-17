import React, { useEffect, useState } from 'react';
import { IHabits, IUser } from '../../pages/main/main';
import Database from '../../service/database';
import VACUser from './VAC_user';

export interface IOnChange{
    (event: any): void;
}

export interface IInfo{
    habitCount: number,
    totalHour: number,
}

const User = ({ db, isDark, user, habits }: { db: Database, isDark: boolean, user: IUser, habits: IHabits }) => {
    const [info, setInfo] = useState<IInfo>({
        totalHour: 0,
        habitCount: 0,
    });
    const [img, setImg] = useState<any>();

    const onChange: IOnChange = (event) => {
        if (!event.target.files.length) return;
        const file = event.target.files[0];
        if (!(file.name.split('.')[1] == 'jpg' || file.name.split('.')[1] == 'png')) return;
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            setImg(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    };

    useEffect(() => {
        db
            .read(user.email, `user/${user.email}/info`)
            .then(res => {
                if (!res) throw new Error("No data available");
                setImg(res.img);
            })
            .catch((error) => {
                 
            });
    }, []);

    useEffect(() => {
        if (!img) return;
        db
            .write(user.email, `user/${user.email}/info`, { img });
    }, [img]);

    useEffect(() => {
        if (!habits) return;
        setInfo(() => {
            const temp: IInfo = {
                totalHour: 0,
                habitCount: 0,
            };
            Object.values(habits).map((item, index) => {
                temp.habitCount = index + 1;
                if (item.boxesJSON) {
                    Object.keys(item.boxesJSON).map((key) => {
                        temp.totalHour += item.boxesJSON[key].totalTime;
                    })
                }
            });
            temp.totalHour= Number((temp.totalHour / 1000 / 3600).toFixed(3));
            
            return temp;
        });
    }, [habits]);
    
    return (
        <VACUser isDark={isDark} user={user} info={info} img={img} onChange={onChange} />
    );
};

export default User;