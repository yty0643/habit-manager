import React, { useEffect, useRef, useState } from 'react';
import VACMiniBox from '../../VAC/VAC_mini_box/VAC_mini_box';

export interface IBoxes {
    [key: number]: { bgColor: string }
};

const MiniBox = ({ active }: { active: boolean }) => {
    const temp: IBoxes = {};
    for (let i = 0; i < 31; i++) {
        const r = Math.random() * (240 - 80) + 80;
        temp[i] = { bgColor: `rgb(${r},${r},${r})` };
    };
    const [boxes, setBoxes] = useState<IBoxes>(temp);
    const intervalRef =  useRef<ReturnType<typeof setInterval>>()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const temp: IBoxes = {};
            for (let i = 0; i < 31; i++) {
                const r = Math.random() * (240 - 80) + 80;
                temp[i] = { bgColor: `rgb(${r},${r},${r})` };
            };
            setBoxes(temp);
        }, 1000);
        return () => {
            clearInterval(intervalRef.current!);
        }
    },[]);

    return (
        <VACMiniBox active={active} boxes={boxes}/>
    );
};

export default MiniBox;