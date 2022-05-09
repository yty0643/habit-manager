import React from 'react';
import styles from './VAC_sign_in_form.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Iprops } from '../../VC/sign_in_form/sign_in_form';

const VACSignInForm = ({ active, emailRef, passRef, setState, signIn, signUp }: Iprops) => {
    return (
        <form className={styles.signInForm}>
            <input
                ref={emailRef}
                className={styles.id}
                type="text"
                placeholder={active ? "email" : ""}
                onChange={() => { setState(emailRef) }} />
            <input
                ref={passRef}
                className={styles.pass}
                type="password"
                placeholder={active ? "password" : ""}
                onChange={() => { setState(passRef) }} />
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