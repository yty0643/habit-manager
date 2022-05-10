import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../service/auth';
import VACSignInForm from '../../VAC/VAC_sign_in_form/VAC_sign_in_form';

export interface ISignIn{
    (event: any): void;
};

export interface Iprops {
    active: boolean,
    emailRef: React.RefObject<HTMLInputElement>,
    passRef: React.RefObject<HTMLInputElement>,
    email: string,
    pass: string,
    setState: { (ref: React.RefObject<HTMLInputElement>): void },
    signIn: { (evnet: any): void },
    signUp: { (evnet: any): void },
    emailCheck: boolean,
    passCheck: boolean,
    msg: string,
};

const SignInForm = ({ auth, active }: { auth: Auth, active: boolean }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const [emailCheck, setEmailCheck] = useState<boolean>(true);
    const [passCheck, setPassCheck] = useState<boolean>(true);
    const [msg, setMsg] = useState<string>("");

    const props: Iprops = {
        active,
        emailRef,
        passRef,
        email,
        pass,
        setState: (ref) => {
            if (ref.current)
                switch (ref) {
                    case emailRef:
                        setEmail(ref.current.value);
                        break;
                    case passRef:
                        setPass(ref.current.value);
                        break;
                }
        },
        signIn: (event) => {
            event.preventDefault();
            if (!email) {
                setEmailCheck(false);
                return;
            };
            setEmailCheck(true);
            if (!pass) {
                setPassCheck(false);
                return
            };
            setPassCheck(true);
            auth
                .signInEP(email, pass)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate("/main");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorCode.split('/')[1] == "invalid-email" || errorCode.split('/')[1] == "user-not-found") {
                        setEmailCheck(false);
                        setMsg("Invalid email");
                    }
                    else if (errorCode.split('/')[1] == "wrong-password") {
                        setPassCheck(false);
                        setMsg("Wrong password");
                    } else {
                        setMsg("Login restricted");
                    }
                });
        },
        signUp: (event) => {
            event.preventDefault();
            navigate("/join");
        },
        emailCheck,
        passCheck,
        msg,
    };

    return (
        <VACSignInForm {...props} />
    );
};

export default SignInForm;