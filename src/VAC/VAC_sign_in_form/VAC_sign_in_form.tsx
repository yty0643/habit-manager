import React from 'react';
import styles from './VAC_sign_in_form.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { ISignIn } from '../../VC/sign_in_form/sign_in_form';

const VACSignInForm = ({ signIn, active }: { signIn: ISignIn, active: boolean}) => {
    
    return (
        <form className={styles.signInForm}>
            <input className={styles.id} type="text" placeholder={active ? "email" : ""} />
            <input className={styles.pass} type="password" placeholder={active ? "password" : ""}/>
            <button onClick={signIn}>
                {active && "Sign in"}
                <FontAwesomeIcon icon={faArrowRightToBracket} />
            </button>
        </form>
    );
};

export default VACSignInForm;