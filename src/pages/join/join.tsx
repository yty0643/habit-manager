import React from 'react';
import Auth from '../../service/auth';
import Logo from '../../VAC/logo/logo';
import SignUpForm from '../../VC/sign_up_form/sign_up_form';
import styles from './join.module.css';
const Join = ({ auth }: { auth: Auth }) => {
    

    return (
        <div className={styles.join}>
            <Logo />
            <p className={styles.title}>Welcome to habit-manager</p>
            <p className={styles.description}>Let's get you signed in and straight to the main.</p>
            <SignUpForm auth={auth}/>
        </div>
    )
}

export default Join;