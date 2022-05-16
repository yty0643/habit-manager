import React from 'react';
import styles from './VAC_sign_in_form.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Iprops } from './sign_in_form';

const VACSignInForm = ({ active, emailRef, passRef, setState, signIn, signUp, emailCheck, passCheck, msg }: Iprops) => {
    return (
        <form className={styles.signInForm}>
            <p className={styles.msg}>
                {active && msg != "" && <FontAwesomeIcon icon={faTriangleExclamation} />}
                {active && msg != "" ? msg : " "}
            </p>
            <input
                ref={emailRef}
                className={`${styles.email} ${active && !emailCheck && styles.error}`}
                type="text"
                placeholder={active ? "email" : ""}
                onChange={() => { setState(emailRef) }} />
            <input
                ref={passRef}
                className={`${styles.pass} ${active && !passCheck && styles.error}`}
                type="password"
                placeholder={active ? "password" : ""}
                onChange={() => { setState(passRef) }}
                autoComplete="off" />
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