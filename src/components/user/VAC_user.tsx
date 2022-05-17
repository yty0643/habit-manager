import React from 'react';
import { IUser } from '../../pages/main/main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import styles from './user.module.css';
import { IInfo, IOnChange } from './user';
import image from './bg.png';
const VACUser = ({ isDark, user, info, img, onChange }: { isDark: boolean, user: IUser, info:IInfo, img: any, onChange: IOnChange }) => {

    return (
        <div className={styles.user}>
            <label className={`${styles.profile} ${isDark && styles.dark}`} htmlFor="ex_file">
                <input className={styles.input} type="file" id="ex_file" onChange={onChange} accept=".jpg, .png"/>
                <img className={styles.img} src={img || image} />
                <div className={styles.cover}>
                    <FontAwesomeIcon icon={faImage} />
                </div>
            </label>
            <div className={`${styles.info} ${isDark && styles.dark}`}>
                <div>
                    <p className={styles.description}>sign in as </p>
                    <p className={styles.value}>{user.email.split('@')[0]}</p>
                </div>
                <div>
                    <p className={styles.value}>{info.habitCount}</p>
                    <p className={styles.description}> habits</p>
                </div>
                <div>
                    <p className={styles.value}>{info.totalHour}</p>
                    <p className={styles.description}> total hour</p>
                </div>
            </div>
        </div>
    );
};

export default VACUser;