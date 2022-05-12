import React from 'react';
import { IOnChange, IOnClick } from './habit_add_form';
import styles from './habit_add_form.module.css';

const VACHabitAddForm = ({ isDark, isCheck, isName, isDescription, isGoal, onClick, onChange }: { isDark:boolean, isCheck:boolean, isName: boolean, isDescription: boolean, isGoal: boolean, onClick: IOnClick, onChange: IOnChange }) => {
    
    return (
        <form className={styles.form}>
            <p className={`${styles.description} ${isDark && styles.dark}`}>Habit name</p>
            <input className={`${styles.name} ${isDark && styles.dark} ${!isName && styles.error}`} type="text" id={"name"} onChange={onChange} />
            <p className={`${styles.description} ${isDark && styles.dark}`}>Description</p>
            <input className={`${styles.des} ${isDark && styles.dark} ${!isDescription && styles.error}`} type="text" id={"description"} onChange={onChange} />
            <p className={`${styles.description} ${isDark && styles.dark}`}>A daily goal (Hour)</p>
            <input className={`${styles.goal} ${isDark && styles.dark} ${!isGoal && styles.error}`} type="text" id={"goal"} placeholder='1~24' onChange={onChange} />
            <button className={`${styles.btn} ${isDark && styles.dark} ${isCheck && styles.active}`} onClick={onClick}>submit</button>
        </form>
    );
};

export default VACHabitAddForm;