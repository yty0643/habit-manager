import React from 'react';
import { IADHabit } from '../../pages/main/main';

interface Iprops{
    addHabit: IADHabit,
    addInpRef: React.RefObject<HTMLInputElement>,
}

const HabitAdd = ({addHabit, addInpRef}: Iprops) => {
    return (
        <div>
            <input ref={addInpRef} type="text" name="" id="" />
            <button onClick={()=>{ addHabit() }}>등록</button>
        </div>
    )
}

export default HabitAdd;