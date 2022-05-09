import React from 'react';
import { Iprops } from '../../VC/sign_up_form/sign_up_form';
import styles from './VAC_sign_up_form.module.css';

const VACSignUpForm = ({ emailRef, passRef, passRef2, email, pass, pass2, setState, signUp }: Iprops) => {
    return (
        <form className={styles.signUpForm}>
            <div className={styles.box}>
                <input ref={emailRef} type="text" onChange={() => { setState(emailRef) }} />
                <p className={styles.msg}>
                    error msg
                </p>
            </div>
            <div className={styles.box}>
                <input ref={passRef} type="password" onChange={() => { setState(passRef) }} />
                <p className={styles.msg}>
                    error msg
                </p>
            </div>
            <div className={styles.box}>
                <input ref={passRef2} type="password" onChange={() => { setState(passRef2) }} />
                <p className={styles.msg}>
                    error msg
                </p>
            </div>
            <button onClick={signUp}>Sign up</button>
        </form>
    );
};

export default VACSignUpForm;