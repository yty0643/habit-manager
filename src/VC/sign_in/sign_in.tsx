import React from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../service/auth';
import VACLogin from '../../VAC/VAC_login/VAC_login';

export interface ISignIn{
    (provider: string): void;
};

export interface ISignUp{
    (): void;
}

const SignIn = ({auth}:{auth: Auth}) => {
    const navigate = useNavigate();
    const signIn:ISignIn = (provider) => {
        auth
            .signIn(provider)
            .then((res) => {
                navigate('/main');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const signUp:ISignUp = () => {
        navigate('/signup');
    }

    return (
        <div>
            <VACLogin signIn={signIn} signUp={signUp}/>
        </div>
    )
}


export default SignIn;