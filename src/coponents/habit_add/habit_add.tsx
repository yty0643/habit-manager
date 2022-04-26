import React from 'react';
import { IAddHabit } from '../../pages/main/main';

interface Iprops{
    addHabit: IAddHabit,
    addInpRef: React.RefObject<HTMLInputElement>,
}

const HabitAdd = ({addHabit, addInpRef}: Iprops) => {
    return (
        <div>
            <input ref={addInpRef} type="text"
                onKeyUp={(event) => {
                    if (event.key == 'Enter')
                        addHabit();
            }}/>
            <button onClick={() => { addHabit() }}>등록</button>
        </div>
    )
}

export default HabitAdd;