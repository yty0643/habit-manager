import React, { useRef } from 'react';
import { IADHabit } from '../../pages/main/main';

const HabitAdd = ({addHabit}:{addHabit : IADHabit}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div>
            <input ref={inputRef} type="text" name="" id="" />
            <button onClick={() => {
                if (!inputRef.current) return;
                addHabit({
                    id: Date.now(),
                    name: inputRef.current.value,
                    count: 0,
            })}}>등록</button>
        </div>
    )
}

export default HabitAdd;