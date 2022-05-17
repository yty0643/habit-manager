import React from 'react';
import { IBox } from '../box_list/box_list';
import styles from './activity_item.module.css';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActivityItem = ({ isDark, date, item }: { isDark:boolean, date: string, item: IBox }) => {
    return (
        <div className={`${styles.section} ${isDark && styles.dark}`}>
            <p className={`${styles.date} ${isDark && styles.dark}`}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faCalendarCheck} />
                </div>
                {date}
            </p>    
            <div className={styles.description}>
                recorded
                <p className={styles.value}>{(item.totalTime / 1000 / 3600).toFixed(3)}</p>
                hours on
                <p className={styles.value}>{Object.values(item.habitTime).length}</p>
                occasions
            </div>
            <div className={styles.box}>
                <div className={styles.start}>
                    <p>{Object.values(item.habitTime).map(item => (<p>{item[0]}</p>))}</p>
                </div>
                <div className={styles.end}>
                    {Object.values(item.habitTime).map(item => (<p>- {item[1]}</p>))}
                </div>
            </div>
        </div>
    );
};

export default ActivityItem;