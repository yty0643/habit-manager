import React, { useEffect, useState } from 'react';
import { IUser } from '../../pages/main/main';
import Database from '../../service/database';
import VACUser from './VAC_user';

export interface IOnChange{
    (event: any): void;
}

const User = ({ db, user }: { db: Database, user: IUser }) => {
    const [img, setImg] = useState<any>();
    const onChange: IOnChange = (event) => {
        if (!event.target.files.length) return;
        const file = event.target.files[0];
        if (!(file.name.split('.')[1] == 'jpg' || file.name.split('.')[1] == 'png')) return;
        console.log(file);
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
                setImg(res.img);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (!img) return;
        db
            .write(user.email, `user/${user.email}/info`, { img });
    }, [img]);
    
    return (
        <VACUser user={user} img={img} onChange={onChange} />
    );
};

export default User;