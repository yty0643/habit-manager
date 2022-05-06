import React from 'react';
import { ISignIn } from '../../pages/login/login';
import styles from './VAC_login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const VACLogin = ({ signIn }: { signIn: ISignIn }) => {
    
    return (
        <div className={styles.login}>
            <div className={styles.box}>
                <div className={styles.l}>
                    <p className={styles.title}>Sign In</p>
                    <form className={styles.form}action="">
                        <input className={styles.input} type="text" placeholder='email'/>
                        <input className={styles.input} type="password" placeholder='password'/>
                        <button className={styles.signInBtn}>
                            <p className={styles.btnTitle}>Sign In</p>
                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                        </button>
                        
                    </form>
                    <div className={styles.horizontal}><p className={styles.description}>with</p></div>
                    <button className={styles.githubBtn} onClick={()=>{
                        signIn('GitHub')
                    }}>
                        GitHub
                    </button>
                    <button className={styles.googleBtn} onClick={()=>{
                        signIn('Google')
                    }}>
                        Google
                    </button>
                </div>
                <div className={styles.vertical}></div>
                <div className={styles.r}>
                    <p>Habit manager</p>
                </div>
            </div>
        </div>
    );
};

export default VACLogin;