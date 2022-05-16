import React, { useCallback, useEffect, useState } from 'react';
import { IHabit, IHabits } from '../../pages/main/main';
import BoxList from '../../VAC/box_list/box_list';
import Timer from '../timer/timer';

export interface IBox{
    date: string,
    habitTime: {[key: number]: string[]},
    totalTime: number,
    color: string,
};


export interface IBoxes{
    [key: string]: IBox
};

export interface IHandleBox{
    (id: number, today: string, boxes: IBox): void;
};

const Box = ({ habit, setHabits, setSelectedHabit }: { habit: IHabit, setHabits: React.Dispatch<React.SetStateAction<IHabits>>, setSelectedHabit: React.Dispatch<React.SetStateAction<IHabit | null>> }) => {
    const [boxes, setBoxes] = useState<IBoxes>({});
    
    const handleBox: IHandleBox = (id, today, data) => {
        setHabits(habits => {
            const temp = { ...habits };
            const todayTemp = { ...temp[id].boxesJSON }
            todayTemp[today] = data;
            temp[id].boxesJSON = todayTemp;
            setSelectedHabit({ ...temp[id] });
            return temp;
        });
    };

    const initBoxes: () => void = useCallback(() => {
        const temp: IBoxes = {};
        const day = new Date().getDay() + 1;
        for (let i = 363 + day; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const key = date.toISOString().split('T')[0];
            temp[key] = {
                date: key,
                habitTime: habit.boxesJSON && habit.boxesJSON[key]?.habitTime || {},
                totalTime: habit.boxesJSON && habit.boxesJSON[key]?.totalTime || 0,
                color: habit.boxesJSON && habit.boxesJSON[key]?.color || "grey", //추후 색상 수정(base color)
            };
        };
        setBoxes(temp);
    }, [habit.boxesJSON]);

    const setTodayBox: (time: number, start: string, end: string) => void = (time, startTime, end) => {
        if (time < 1000) return;
        const today: string = new Date().toISOString().split('T')[0];
        setBoxes(boxes => {
            const temp = { ...boxes };
            const data = {
                ...boxes[today],
                habitTime: {
                    ...boxes[today].habitTime,
                    [`${Object.keys(boxes[today].habitTime).length}`]: [startTime, end],
                },
                totalTime: time,
                color: colorSelector(time),
            };
            temp[`${today}`] = data;
            handleBox(habit.id, today, data);
            return temp;
        });
    };
    
    const colorSelector: (temp: number) => string = (temp) => {
        temp /= 1;
        const hour: number = 3600;
        if (temp < (2 * hour)) return "red"; // 추후 색상 수정
        else if (temp < (4 * hour)) return "blue";
        else if (temp < (6 * hour)) return "skyblue";
        else if (temp < (8 * hour)) return "skyblue";
        else return "skyblue";
    };

    useEffect(() => {
        initBoxes();
    }, [habit.boxesJSON]);
    
    return (
        <div>
            <BoxList boxes={boxes} />
            <Timer habit={habit} setTodayBox={setTodayBox} />
        </div>
    );
};

export default Box;