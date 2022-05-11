import React from 'react';
import { IUser } from '../../pages/main/main';
import styles from './user.module.css';

const VACUser = ({ user }: { user: IUser }) => {
    return (
        <div className={styles.user}>
            <div>user</div>
        </div>
    );
};

export default VACUser;