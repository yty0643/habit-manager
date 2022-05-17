import React from 'react';
import { IHabit } from '../../pages/main/main';
import ActivityItem from '../activity_item/activity_item';
import styles from './activity_list.module.css';
const ActivityList = ({ isDark, habit }: { isDark: boolean, habit: IHabit }) => {

    return (
        <div className={styles.list}>
            {habit.boxesJSON && Object.keys(habit.boxesJSON).map(key => (
                <ActivityItem
                    key={key}
                    isDark={isDark}
                    date={key}
                    item={habit.boxesJSON![key]}
                />
            ))}
        </div>
    );
};

export default ActivityList;