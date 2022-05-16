import React from 'react';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISignOut } from './sign_out_btn';
import styles from './VAC_sign_out_btn.module.css';

const VACSignOutBtn = ({ signOut }: { signOut: ISignOut }) => {
    return (
        <button className={styles.btn} onClick={signOut}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </button>
    );
};

export default VACSignOutBtn;