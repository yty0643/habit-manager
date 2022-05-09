import React from 'react';
import { IProps } from '../../VC/sign_up_form/sign_up_form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './VAC_sign_up_form.module.css';

const VACSignUpForm = ({ emailRef, passRef, passRef2, email, pass, pass2, setState, signUp, emailCheck, passCheck, passCheck2, isPossible }: IProps) => {
    return (
        <form className={styles.signUpForm}>
            <div className={styles.box}>
                <input className={`${styles.email} ${!emailCheck && styles.error}`} ref={emailRef} type="text" placeholder='email' onChange={() => { setState(emailRef) }} />
                {
                    emailCheck ?
                        <div className={styles.checkIcon}>
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        :
                        <p className={styles.msg}>
                            Please enter an email
                        </p>
                }
            </div>
            <div className={styles.box}>
                <input className={`${styles.pass} ${!passCheck && styles.error}`} ref={passRef} type="password" placeholder='password' onChange={() => { setState(passRef) }} />
                {
                    passCheck ?
                        <div className={styles.checkIcon}>
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        :
                        <p className={styles.msg}>
                            Please enter your password
                        </p>
                }
            </div>
            <div className={styles.box}>
                <input className={`${styles.pass2} ${passCheck2 != 2 && styles.error}`} ref={passRef2} type="password" placeholder='password re-enter' onChange={() => { setState(passRef2) }} />
                {
                    passCheck2 == 0 &&
                    <p className={styles.msg}>
                        Please enter your password
                    </p>
                }
                {
                    passCheck2 == 1 &&
                    <p className={styles.msg}>
                        The password is different
                    </p>
                }
                {
                    passCheck2 == 2 &&
                    <div className={styles.checkIcon}>
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                }
            </div>
            <button className={`${styles.signUpBtn} ${isPossible && styles.active}`} onClick={signUp}>Sign up</button>
        </form>
    );
};

export default VACSignUpForm;