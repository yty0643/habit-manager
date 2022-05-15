import React from 'react';
import { IHabit } from '../../pages/main/main';
import { IInfo } from './habit_preview';
import styles from './habit_preview.module.css';

const VACHabitPreview = ({ habit, info }: { habit: IHabit, info: IInfo }) => {
    
    return (
        <div>
            <div>
                <p>{habit.name}</p>
            </div>
            <div>
                <p>{habit.description}</p>
            </div>
            <div>
                <p>{habit.goal}</p>
            </div>
            <div>
                <p>{info.count}</p>
                <p>records in this habit</p>
            </div>
            <div>
                <p>{info.totalHour}</p>
                <p>total hour</p>
            </div>
        </div>
    );
};

export default VACHabitPreview;