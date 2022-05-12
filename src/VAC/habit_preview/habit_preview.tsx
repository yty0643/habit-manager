import React from 'react';
import { IHabit } from '../../pages/main/main';
import VACHabitPreview from './VAC_habit_preview';

const HabitPreivew = ({ habit }:{habit:IHabit}) => {
    
    return (
        <VACHabitPreview habit={habit}/>
    );
};

export default HabitPreivew;