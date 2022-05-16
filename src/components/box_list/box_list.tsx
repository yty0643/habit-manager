import React, { useCallback, useEffect, useState } from 'react';
import { IHabit, IHabits } from '../../pages/main/main';
import VACBoxList from './VAC_box_list';

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

const BoxList = ({ isDark, habit }: { isDark:boolean, habit: IHabit }) => {
    const [boxes, setBoxes] = useState<IBoxes>({});

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
                color: habit.boxesJSON && habit.boxesJSON[key]?.color || "rgba(100, 100, 100, 0.3)", //추후 색상 수정(base color)
            };
        };
        setBoxes(temp);
    }, [habit.boxesJSON]);

    useEffect(() => {
        initBoxes();
    }, [habit.boxesJSON]);
    
    return (
        <VACBoxList isDark={isDark} boxes={boxes} />
    );
};

export default BoxList;