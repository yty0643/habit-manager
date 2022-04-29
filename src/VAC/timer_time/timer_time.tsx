import React from 'react';

const TimerTime = ({ timeToS }: { timeToS: string }) => { 
    return (
        <div>
            <p>{timeToS}</p>
        </div>
    )
}

export default React.memo(TimerTime);