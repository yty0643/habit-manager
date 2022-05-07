import React from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../service/auth';
import VACSignInBtn from '../../VAC/VAC_sign_in_btn/VAC_sign_in_btn';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ISignIn{
    (): void;
};

export interface IItem {
    provider: string,
    bgColor: string,
    icon: IconDefinition,
};

const SignInBtn = ({ auth, item, active }: { auth: Auth, item: IItem, active: boolean }) => {
    const navigate = useNavigate();

    const signIn: ISignIn = () => {
        console.log(item.provider);
        auth
            .signIn(item.provider)
            .then((res) => {
                navigate('/main');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <VACSignInBtn item={item} active={active} signIn={signIn} />
        </div>
    )
};

export default SignInBtn;