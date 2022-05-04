import React from 'react';
import { ISignIn } from '../../pages/login/login';
import styles from './VAC_login.module.css';

const VACLogin = ({ signIn }: { signIn: ISignIn }) => {
    
    return (
        <div className={styles.login}>
            <div className={styles.box}>
                <div className={styles.l}>
                    <button className={styles.githubBtn} onClick={signIn}>
                        sign-in width GitHub
                    </button>
                </div>
                <div className={styles.vertical}></div>
                <div className={styles.r}>
                    <p>habit-manager</p>
                </div>
            </div>
        </div>
    );
};

export default VACLogin;