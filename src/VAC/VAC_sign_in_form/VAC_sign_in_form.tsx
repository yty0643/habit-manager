import React from 'react';
import styles from './VAC_sign_in_form.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { ISignIn } from '../../VC/sign_in_form/sign_in_form';

const VACSignInForm = ({ signIn, signUp, active }: { signIn: ISignIn, signUp: ISignIn, active: boolean}) => {
    
    return (
        <form className={styles.signInForm}>
            <input className={styles.id} type="text" placeholder={active ? "email" : ""} />
            <input className={styles.pass} type="password" placeholder={active ? "password" : ""}/>
            <button className={styles.signBtn} onClick={signIn}>
                {active && "Sign in "}
                <FontAwesomeIcon icon={faArrowRightToBracket} />
            </button>
            <p className={`${styles.signUp} ${active && styles.active}`} onClick={signUp}>
                {active ? "Sign up and get started!" : "Don't have an account?"}
            </p>
        </form>
    );
};

export default VACSignInForm;