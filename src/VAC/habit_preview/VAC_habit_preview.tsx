import React from 'react';
import { IHabit } from '../../pages/main/main';
import { IInfo } from './habit_preview';
import styles from './habit_preview.module.css';
import { faBook, faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const VACHabitPreview = ({ isDark, habit, info }: { isDark: boolean, habit: IHabit, info: IInfo }) => {
    
    return (
        <div className={`${styles.preview} ${isDark && styles.dark}`}>
            <div className={styles.title}>
                <div className={styles.box}>
                    <FontAwesomeIcon icon={faBook} />
                    <p className={styles.name}>{habit.name}</p>
                </div>
                <div className={styles.box}>
                    <FontAwesomeIcon icon={faFlag} />
                    <p className={styles.goal}>{habit.goal}h</p>
                </div>
            </div>
            <div className={styles.information}>
                <div className={styles.box}>
                    <p className={styles.memo}>{habit.description}</p>
                </div>
                <div className={styles.box}>
                    <p className={styles.value}>{info.days}</p>
                    <p className={styles.description}>days</p>
                </div>
                <div className={styles.box}>
                    <p className={styles.value}>{info.records}</p>
                    <p className={styles.description}>records</p>
                </div>
                <div className={styles.box}>
                    <p className={styles.value}>{info.hours}</p>
                    <p className={styles.description}>hours</p>
                </div>
                <div className={styles.since}>
                    <p className={styles.description}>since {habit.since}</p>
                </div>
            </div>
        </div>
    );
};

export default VACHabitPreview;