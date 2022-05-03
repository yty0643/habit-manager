import React from 'react';
import HabitItem from '../habit_item/habit_item';
import HabitAdd from '../habit_add/habit_add';
import { IProps } from '../../VC/habit/habit';

const HabitList = ({ habits, addInpRef, addHabit, delHabit, handleBox } : IProps) => {
    return (
        <div>
                <HabitAdd
                    addHabit={addHabit}
                    addInpRef={addInpRef}
                />
            <ul>
                {Object.keys(habits).map(key => {
                    return (
                        <HabitItem
                            key={key}
                            habit={habits[Number(key)]}
                            delHabit={delHabit}
                            handleBox={handleBox} />
                    )
                })}
            </ul>
        </div>
    )
}

export default React.memo(HabitList);