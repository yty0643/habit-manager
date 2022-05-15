import React, { useEffect, useState } from 'react';
import { IHabit } from '../../pages/main/main';
import VACHabitPreview from './VAC_habit_preview';


export interface IInfo{
    count: number,
    totalHour: number,
}

const HabitPreivew = ({ habit }: { habit: IHabit }) => {
    const [info, setInfo] = useState<IInfo>({
        count: 0,
        totalHour: 0,
    });

    useEffect(() => {
        console.log(habit);
        setInfo(() => {
            const temp = {
                count: 0,
                totalHour: 0,
            };
            if (habit.boxesJSON) {
                Object.values(habit.boxesJSON).map(item => {
                    temp.count += Object.values(item.habitTime).length;
                    temp.totalHour += item.totalTime;
                })
            }
            temp.totalHour= Number((temp.totalHour / 1000 / 3600).toFixed(3));
            return temp;
        });
    }, [habit]);

    return (
        <VACHabitPreview habit={habit} info={info}/>
    );
};

export default HabitPreivew;