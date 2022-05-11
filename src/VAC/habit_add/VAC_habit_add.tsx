import React from 'react';
import { IAddHabit } from '../../VC/habit/habit';

interface Iprops{
    addHabit: IAddHabit,
    addInpRef: React.RefObject<HTMLInputElement>,
}

const VACHabitAdd = ({addHabit, addInpRef}: Iprops) => {
    return (
        <div>
            <input
                ref={addInpRef}
                type="text"
                onKeyUp={(event) => {
                    if (event.key === 'Enter')
                        addHabit();
            }}/>
            <button
                onClick={() => {
                    addHabit()
            }}>등록</button>
        </div>
    )
}

export default React.memo(VACHabitAdd);