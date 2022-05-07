import React from 'react';
import Auth from '../../service/auth';
import Database from '../../service/database';
import Habit from '../../VC/habit/habit';

const Main = ({ auth, db }: { auth: Auth, db: Database }) => {
    

    return (
        <Habit auth={auth} db={db} />
    );
};

export default Main;