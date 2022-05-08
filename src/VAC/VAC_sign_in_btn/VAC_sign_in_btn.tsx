import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IItem, ISignIn } from '../../VC/sign_in_btn/sign_in_btn';
import styles from './VAC_sign_in_btn.module.css';

const VACSignInBtn = ({ item, active, signIn }: { item: IItem, active: boolean, signIn: ISignIn }) => {
    return (
        <button className={`${styles.btn} ${active && styles.active}`} onClick={signIn} style={{ backgroundColor: item.bgColor }}>
            {active && `${item.provider} `}
            <FontAwesomeIcon icon={item.icon} />
        </button>
    );
};

export default VACSignInBtn;