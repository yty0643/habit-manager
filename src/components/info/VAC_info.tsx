import React from 'react';
import styles from './VAC_info.module.css';
import Logo from '../logo/logo';

const VACInfo = ({ active }: { active: boolean }) => {
    return (
        <div className={`${styles.info} ${active && styles.active}`}>
            <Logo isDark={false}/>
            <p className={`${styles.title} ${active && styles.active}`}>
                habit-manager
            </p>
            <p className={`${styles.description} ${active && styles.active}`}>
                Manage Your Habits!
            </p>
        </div>
    );
};

export default VACInfo;