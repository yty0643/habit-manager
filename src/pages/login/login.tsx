import React from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../service/auth';
import VACLogin from '../../VAC/VAC_login/VAC_login';

export interface ISignIn{
    (): void;
};

const Login = ({auth}:{auth: Auth}) => {
    const navigate = useNavigate();
    const signIn:ISignIn = () => {
        auth
            .signIn()
            .then((res) => {
                navigate('/main');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <VACLogin signIn={signIn}/>
        </div>
    )
}

export default Login;