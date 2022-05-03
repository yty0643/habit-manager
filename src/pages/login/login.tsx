import React from 'react';
import Auth from '../../service/auth';

const Login = ({auth}:{auth: Auth}) => {
    
    const login = () => {
        auth.signIn();
    }

    return (
        <button onClick={login}>check</button>
    )
}

export default Login;