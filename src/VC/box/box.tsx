import React, { useCallback, useEffect, useState } from 'react';
import BoxList from '../../VAC/box_list/box_list';
import { IHandleBox } from '../habit/habit';
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

const Box = ({id,boxesJSON, handleBox}:{id:number, boxesJSON:IBoxes, handleBox: IHandleBox}) => {
    const [boxes, setBoxes] = useState<IBoxes>({});
    const [json, setJson] = useState<IBoxes>({ //임시 데이터 추후 DB
        "2022-04-24": {
            date: "2022-04-24",
            habitTime: {
                0: ["11:06:56","11:07:10"],
                1: ["14:16:56","14:20:00"],
            },
            totalTime: 3600000,
            color: "green",
        },
        "2022-04-26": {
            date: "2022-04-26",
            habitTime: {
                0: ["11:06:56","11:07:10"],
                1: ["14:16:56","14:20:00"],
            },
            totalTime: 36000000,
            color: "black",
        },
    });

    const initBoxes: () => void = useCallback(() => {
        const temp: IBoxes = {};
        const day = new Date().getDay() + 1;
        for (let i = 363 + day; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const key = date.toISOString().split('T')[0];
            temp[key] = {
                date: key,
                habitTime: json[key]?.habitTime || {},
                totalTime: json[key]?.totalTime || 0,
                color: json[key]?.color || "grey", //추후 색상 수정(base color)
            };
        };
        setBoxes(temp);
    }, [json]);

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
            }
            temp[`${today}`] = data;
            handleBox(id, today, data);
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
    }, [json]);
    
    return (
        <div>
            <BoxList boxes={boxes} />
            <Timer setTodayBox={setTodayBox} />
        </div>
    );
};

export default Box;