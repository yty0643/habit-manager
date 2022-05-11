import React from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../service/auth';
import VACSignOutBtn from './VAC_sign_out_btn';

export interface ISignOut{
    (): void;
};

const SignOutBtn = ({ auth }: { auth: Auth }) => {
    const navigate = useNavigate();
    const signOut: ISignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigate('/');
            }).catch((error) => {
                console.log(error);
            });
    };
    
    return (
        <VACSignOutBtn signOut={signOut} />
    );
};

export default SignOutBtn;