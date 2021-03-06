import React, { useState } from 'react';
import Auth from '../../service/auth';
import SignInBtn from '../../components/sign_in_btn/sign_in_btn';
import SignInForm from '../../components/sign_in_form/sign_in_form';
import styles from './login.module.css';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Info from '../../components/info/info';
import LinkBtn from '../../components/link_btn/link_btn';
import Separator from '../../components/separator/separator';
import MiniBox from '../../components/mini_box/mini_box';


const Login = ({ auth }: { auth: Auth }) => {
    const [isFocus, setIsFocus] = useState<number>(0);
    return (
        <div className={styles.login}>
            <div className={styles.l} onMouseEnter={() => { setIsFocus(1) }} onMouseLeave={() => { setIsFocus(0) }}>
                <SignInForm auth={auth} active={isFocus == 1 ? true : false}/>
                <Separator active={isFocus == 1 ? true : false} />
                <SignInBtn auth={auth} item={{ provider: "Github", bgColor: "rgb(50, 50, 50)", icon: faGithub }} active={isFocus == 1 ? true : false} />
                <SignInBtn auth={auth} item={{ provider: "Google", bgColor: "rgb(89, 120, 255)", icon: faGoogle }} active={isFocus == 1 ? true : false} />
            </div>
            <div className={styles.vertical}></div>
            <div className={styles.r} onMouseEnter={() => { setIsFocus(2) }} onMouseLeave={() => { setIsFocus(0) }}>
                <Info active={isFocus == 2 ? true : false} />
                <MiniBox active={isFocus == 2 ? true : false} />
                <LinkBtn active={isFocus == 2 ? true : false} item={{href: "https://github.com/yty0643/habit-manager", icon: faGithub}} />
            </div>
        </div>
    );
};

export default Login;