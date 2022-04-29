import React from 'react';

const TimerBtn = ({onClick}:{onClick:()=>void}) => {
    
    return (
        <div>
            <button onClick={() => {
                onClick();
            }}>
            등록
            </button>
        </div>
    )
}

export default React.memo(TimerBtn);