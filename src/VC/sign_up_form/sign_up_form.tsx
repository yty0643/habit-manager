import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../service/auth';
import VACSignUpForm from '../../VAC/VAC_sign_up_form/VAC_sign_up_form';


export interface Iprops{
    emailRef: React.RefObject<HTMLInputElement>,
    passRef: React.RefObject<HTMLInputElement>,
    passRef2: React.RefObject<HTMLInputElement>,
    email: string,
    pass: string,
    pass2: string,
    setState: { (ref: React.RefObject<HTMLInputElement>): void },
    signUp: { (evnet: any): void },
};

const SignUpForm = ({ auth }: { auth: Auth }) => {
    const navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const passRef2 = useRef<HTMLInputElement>(null);
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [pass2, setPass2] = useState<string>("");

    const props: Iprops = {
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
    };

    useEffect(() => {
        if (email == "") console.log("H");
    }, [email, pass, pass2]);

    return (
        <VACSignUpForm {...props} />
    );
};

export default SignUpForm;