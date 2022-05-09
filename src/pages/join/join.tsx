import React from 'react';
import Auth from '../../service/auth';
import SignUpForm from '../../VC/sign_up_form/sign_up_form';

const Join = ({ auth }: { auth: Auth }) => {
    

    return (
        <div>
            <SignUpForm auth={auth}/>
        </div>
    )
}

export default Join;