import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IHabit, IHabits } from '../../pages/main/main';
import VACTimer from './VAC_timer';

const Timer = ({ isDark, habit, setHabits, setSelectedHabit }: { isDark: boolean, habit: IHabit, setHabits: React.Dispatch<React.SetStateAction<IHabits>>, setSelectedHabit: React.Dispatch<React.SetStateAction<IHabit | null>> }) => {
    const [isTimer, setIsTimer] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);
    const [timeToS, setTimeToS] = useState<string>("00:00:00");
    const [startTime, setStartTime] = useState<string>();
    const interval = useRef<ReturnType<typeof setInterval>>();

    const onClick = () => {
        if (isTimer) {
            console.log("stop");
            clearInterval(interval.current!);
            setHabits((habits) => {
                const endTime = new Date().toTimeString().split(' ')[0];
                if (endTime == startTime) return habits;
                const today = new Date().toISOString().split('T')[0];
                const temp = { ...habits };
                const boxesJSON = { ...temp[habit.id].boxesJSON };
                boxesJSON[today] = {
                    ...boxesJSON[today],
                    habitTime: {
                        ...boxesJSON[today]?.habitTime,
                        [`${boxesJSON[today] && Object.keys(boxesJSON[today].habitTime).length || 0}`]: [startTime, endTime],
                    },
                    totalTime: time,
                    color: colorSelector(time),
                }
                console.log(boxesJSON[today]);
                temp[habit.id].boxesJSON = boxesJSON;
                setSelectedHabit({...temp[habit.id]});
                return temp;
            })
            setIsTimer(false);
        } else {
            console.log("start");
            interval.current = setInterval(() => {
                setTime(time => time + 1000);
            }, 1000)
            setIsTimer(true);
            setStartTime(new Date().toTimeString().split(' ')[0]);
        }
    };

    const timer: (temp: number) => string = useCallback((temp) => {
        temp /= 1000;
        const h: string = (Math.floor(temp / 3600)).toString().padStart(2, '0');
        const m: string = (Math.floor(temp % 3600 / 60)).toString().padStart(2, '0');
        const s: string = (temp % 3600 % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    }, []);

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
        if (habit.boxesJSON) {
            const today = new Date().toISOString().split('T')[0];
            setTime(habit.boxesJSON[today].totalTime);
        } else {
            setTime(0);
        }
    }, [habit]);

    useEffect(() => {
        setTimeToS(timer(time));
    },[time])
    
    return (
        <VACTimer isDark={isDark} isTimer={isTimer} timeToS={timeToS} onClick={onClick} />
    );
};

export default Timer;