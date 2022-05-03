import React from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../service/auth';


const Login = ({auth}:{auth: Auth}) => {
    const navigate = useNavigate();
    const signIn = () => {
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
            <button onClick={signIn}>signIn</button>
        </div>
    )
}

export default Login;