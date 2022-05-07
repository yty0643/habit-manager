import React, { useState } from 'react';
import { ISignIn } from '../../VC/sign_in_btn/sign_in_btn';
import styles from './VAC_login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faGithub,faGoogle } from '@fortawesome/free-brands-svg-icons';

const VACLogin = ({ signIn }: { signIn: ISignIn}) => {

    const [active, setActive] = useState<Boolean>(false);
    const [active2, setActive2] = useState<boolean>(false);
    
    return (
        <div className={styles.login}>
            <div className={styles.box}>
                <div
                    className={styles.l}
                    onMouseEnter={() => {
                        setActive(true);
                    }} onMouseLeave={() => {
                        setActive(false);
                    }}>
                    <p className={styles.LTitle}>Sign In</p>
                    <form className={styles.form} action="">
                        <input className={styles.input} type="text" placeholder='email' />
                        <input className={styles.input} type="password" placeholder='password' />
                        <button className={`${styles.btn} ${styles.signIn}`}>
                            <div className={`${styles.btnTitle} ${active && styles.active}`}>
                                Sign in
                            </div>
                            <div className={`${styles.btnIcon} ${active && styles.active} ${styles.signInIcon}`}>
                                <FontAwesomeIcon icon={faArrowRightToBracket} />
                            </div>
                        </button>
                    </form>
                    <button className={styles.signUp}>
                        {active? "Sign up and get started!":"Don't have an account?"}
                    </button>
                    <div className={styles.horizontal}><p className={styles.description}>with</p></div>
                    <button className={`${styles.btn} ${styles.github}`} onClick={() => {
                        signIn();
                    }}>
                        <div className={`${styles.btnTitle} ${active && styles.active}`}>
                            GitHub
                        </div>
                        <div className={`${styles.btnIcon} ${active && styles.active} ${styles.githubIcon}`}>
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                    </button>
                    <button className={`${styles.btn} ${styles.google}`} onClick={() => {
                        signIn();
                    }}>
                        <div className={`${styles.btnTitle} ${active && styles.active}`}>
                            Google
                        </div>
                        <div className={`${styles.btnIcon} ${active && styles.active} ${styles.googleIcon}`}>
                            <FontAwesomeIcon icon={faGoogle} />
                        </div>
                    </button>
                </div>
                <div className={styles.vertical}></div>
                <div className={styles.r}
                    onMouseEnter={() => {
                        setActive2(true);
                    }} onMouseLeave={() => {
                        setActive2(false);
                    }}>
                    <p className={styles.RTitle}>Habit manager</p>
                    <a href="https://github.com/yty0643" target="_blank">
                    <p className={styles.visit}>Visit GitHub</p>
                    </a>
                    <p className={`${styles.contact} ${active2 && styles.active}`}>{active2 ? `yty0643@naver.com`:`Contact me`}</p>
                </div>
            </div>
        </div>
    );
};

export default VACLogin;