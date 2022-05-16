import React from 'react';
import styles from './separator.module.css'; 

const Separator = ({ active }: { active: boolean }) => {
    return (
        <div className={styles.horizontal}>
            <p className={styles.separator}>
                {active ? "Sign in with" : "with"}
            </p>
        </div>
    );
};

export default Separator;