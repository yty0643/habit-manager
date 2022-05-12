import React from 'react';
import { IUser } from '../../pages/main/main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import styles from './user.module.css';
import { IOnChange } from './user';

const VACUser = ({ user, img, onChange }: { user: IUser, img: any, onChange: IOnChange }) => {
    return (
        <label className={styles.user} htmlFor="ex_file">
            <input className={styles.input} type="file" id="ex_file" onChange={onChange} accept=".jpg, .png"/>
            <img className={styles.img} src={img} />
            <div className={styles.cover}>
                <FontAwesomeIcon icon={faImage} />
            </div>
        </label>
    );
};

export default VACUser;