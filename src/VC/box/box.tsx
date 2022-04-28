import React, { useCallback, useEffect, useState } from 'react';
import BoxList from '../../VAC/box_list/box_list';
import Timer from '../timer/timer';

export interface IBox{
    date: string,
    habitTime: {[key: number]: string},
    totalTime: number,
}

export interface IBoxes{
    [key: string]: IBox
}

const Box = () => {
    const [boxes, setBoxes] = useState<IBoxes>({});
    const [json, setJson] = useState<IBoxes>({ //임시 데이터 추후 DB
        "2022-04-24":{
            date: "2022-04-24",
            habitTime: {
                1: "11:06:56",
                2: "14:16:56",
            },
            totalTime: 3600000,
        },
        "2022-04-26":{
            date: "2022-04-26",
            habitTime: {
                1: "14:06:56",
                2: "14:16:56",
            },
            totalTime: 36000000,
        },
    });

    const initBoxes: () => void = useCallback(() => {
        const temp: IBoxes = {};
        const day = new Date().getDay()+1;
        for (let i = 363+day; i >= 0; i--){
            const date = new Date();
            date.setDate(date.getDate() - i);
            const key = date.toISOString().split('T')[0];
            temp[key] = {
                date: key,
                habitTime: json[key]?.habitTime || {},
                totalTime: json[key]?.totalTime || 0,
            };
        }
        setBoxes(temp);
    }, [json]);
    
    useEffect(() => {
        initBoxes();
    }, [json])
    
    return(
        <div>
            <BoxList boxes={boxes} />
            <Timer />
        </div>
    )
}

export default Box;