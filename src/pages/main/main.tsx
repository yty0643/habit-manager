import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../service/auth';
import Database from '../../service/database';
import Habit from '../../VC/habit/habit';

interface IUser{
    id: string,
    name: string
}

const Main = ({ auth, db }: { auth: Auth, db: Database }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<IUser>();
    const signOut = () => {
        auth
            .signOut()
            .then(() => {
                navigate('/');
            }).catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        auth
            .getUser()
            .then((res: any) => {
                setUser({
                    id: res.reloadUserInfo.screenName,
                    name: res.reloadUserInfo.displayName,
                });
            })
            .catch((error: any) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <p>{user?.id}</p>
            <button onClick={signOut}>signOut</button>
            <Habit />
        </div>
    )
};

export default Main;