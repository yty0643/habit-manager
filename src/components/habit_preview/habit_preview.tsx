import React, { useEffect, useState } from 'react';
import { IHabit } from '../../pages/main/main';
import VACHabitPreview from './VAC_habit_preview';


export interface IInfo{
    days: number,
    records: number,
    hours: number,
}

const HabitPreivew = ({ isDark, habit }: { isDark:boolean, habit: IHabit }) => {
    const [info, setInfo] = useState<IInfo>({
        days: 0,
        records: 0,
        hours: 0,
    });

    useEffect(() => {
        setInfo(() => {
            const temp = {
                days: 0,
                records: 0,
                hours: 0,
            };
            if (habit.boxesJSON) {
                Object.values(habit.boxesJSON).map((item,index) => {
                    temp.days = index+1;
                    temp.records += Object.values(item.habitTime).length;
                    temp.hours += item.totalTime;
                })
            }
            temp.hours= Number((temp.hours / 1000 / 3600).toFixed(3));
            return temp;
        });
    }, [habit]);

    return (
        <VACHabitPreview isDark={isDark} habit={habit} info={info}/>
    );
};

export default HabitPreivew;