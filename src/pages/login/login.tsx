import React, { useState } from 'react';
import Auth from '../../service/auth';
import SignInBtn from '../../VC/sign_in_btn/sign_in_btn';
import SignInForm from '../../VC/sign_in_form/sign_in_form';
import styles from './login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Info from '../../VC/info/info';


const Login = ({ auth }: { auth: Auth }) => {
    const [isFocus, setIsFocus] = useState<number>(0);
    return (
        <div className={styles.login}>
            <div className={styles.l} onMouseEnter={() => { setIsFocus(1) }} onMouseLeave={() => { setIsFocus(0) }}>
                <SignInForm auth={auth} active={isFocus == 1 ? true : false} />
                <div className={styles.horizontal}></div>
                <SignInBtn auth={auth} item={{ provider: "Github", bgColor: "grey", icon: faGithub }} active={isFocus == 1 ? true : false} />
                <SignInBtn auth={auth} item={{ provider: "Google", bgColor: "blue", icon: faGoogle }} active={isFocus == 1 ? true : false} />
            </div>
            <div className={styles.vertical}></div>
            <div className={styles.r} onMouseEnter={() => { setIsFocus(2) }} onMouseLeave={() => { setIsFocus(0) }}>
                <Info active={isFocus == 2 ? true : false} />
            </div>
        </div>
    );
};

export default Login;