import React from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../service/auth';
import VACSignInForm from '../../VAC/VAC_sign_in_form/VAC_sign_in_form';

export interface ISignIn{
    (event: any): void;
};

const SignInForm = ({ auth, active }: { auth: Auth, active: boolean }) => {
    const navigate = useNavigate();
    
    const signIn: ISignIn = (event) => {
        // navigate("/main");
        event.preventDefault();
        console.log("SIGN-IN!");
    }

    return (
        <VACSignInForm signIn={signIn} active={active} />
    )
};

export default SignInForm;