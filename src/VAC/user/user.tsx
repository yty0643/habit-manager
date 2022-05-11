import React from 'react';
import { IUser } from '../../pages/main/main';
import VACUser from './VAC_user';

const User = ({ user }: { user: IUser }) => {
    
    return (
        <VACUser user={user} />
    );
};

export default User;