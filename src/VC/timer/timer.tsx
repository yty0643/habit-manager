import React, { useCallback, useEffect, useRef, useState } from 'react';
import TimerBtn from '../../VAC/timer_btn/timer_btn';
import TimerTime from '../../VAC/timer_time/timer_time';

const Timer = ({ setTodayBox }: { setTodayBox: (temp: number, start: string) => void }) => {
    const [isTimer, setIsTimer] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);
    const [timeToS, setTimeToS] = useState<string>("00:00:00");
    const interval = useRef<ReturnType<typeof setInterval>>();

    const onClick: () => void = () => {
        if (!isTimer) {
            setIsTimer(true);
            interval.current = setInterval(() => {
                setTime(time => time + 1000);
            }, 1000)
        } else {
            clearInterval(interval.current!);
            setIsTimer(false);
            const startTime = new Date().toTimeString().split(' ')[0];
            setTodayBox(time, startTime);
        }
    };

    const timer: (temp: number) => string = useCallback((temp) => {
        temp /= 1000;
        const h: string = (Math.floor(temp / 3600)).toString().padStart(2, '0');
        const m: string = (Math.floor(temp % 3600 / 60)).toString().padStart(2, '0');
        const s: string = (temp % 3600 % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    }, []);

    useEffect(() => {
        setTimeToS(timer(time));
    }, [time]);

    return (
        <div>
            <TimerBtn onClick={onClick} />
            <TimerTime timeToS={timeToS} />
        </div>
    );
};

export default Timer;