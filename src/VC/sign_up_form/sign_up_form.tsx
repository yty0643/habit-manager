import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../service/auth';
import VACSignUpForm from '../../VAC/VAC_sign_up_form/VAC_sign_up_form';


export interface IProps{
    emailRef: React.RefObject<HTMLInputElement>,
    passRef: React.RefObject<HTMLInputElement>,
    passRef2: React.RefObject<HTMLInputElement>,
    email: string,
    pass: string,
    pass2: string,
    setState: { (ref: React.RefObject<HTMLInputElement>): void },
    signUp: { (evnet: any): void },
    emailCheck: boolean,
    passCheck: boolean,
    passCheck2: number,
    isPossible: boolean,
};

const SignUpForm = ({ auth }: { auth: Auth }) => {
    const navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const passRef2 = useRef<HTMLInputElement>(null);
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [pass2, setPass2] = useState<string>("");
    const [emailCheck, setEmailCheck] = useState<boolean>(false);
    const [passCheck, setPassCheck] = useState<boolean>(false);
    const [passCheck2, setPassCheck2] = useState<number>(0);
    const [isPossible, setIsPossible] = useState<boolean>(false);
    const props: IProps = {
        emailRef,
        passRef,
        passRef2,
        email,
        pass,
        pass2,
        setState: (ref) => {
            if (ref.current)
                switch (ref) {
                    case emailRef:
                        setEmail(ref.current.value);
                        break;
                    case passRef:
                        setPass(ref.current.value);
                        break;
                    case passRef2:
                        setPass2(ref.current.value);
                        break;
                }
        },
        signUp: (event) => {
            event.preventDefault();
            auth
                .signUp(email, pass)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate('/main');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error);
                });
        },
        emailCheck,
        passCheck,
        passCheck2,
        isPossible,
    };

    useEffect(() => {
        if (!email) {
            setEmailCheck(false);
            return;
        }
        setEmailCheck(true);
    }, [email]);

    useEffect(() => {
        if (!pass) {
            setPassCheck(false);
            return;
        }
        setPassCheck(true);
    }, [pass]);

    useEffect(() => {
        if (!pass2) {
            setPassCheck2(0);
            return;
        }
        if (pass != pass2)
            setPassCheck2(1);
        else
            setPassCheck2(2);
    }, [pass, pass2]);

    useEffect(() => {
        if (emailCheck && passCheck && passCheck2 == 2)
            setIsPossible(true);
        else
            setIsPossible(false);
    }, [emailCheck, passCheck, passCheck2]);

    return (
        <VACSignUpForm {...props} />
    );
};

export default SignUpForm;