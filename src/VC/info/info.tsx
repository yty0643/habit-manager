import React from 'react';
import VACInfo from '../../VAC/VAC_info/VAC_info';

const Info = ({ active }: { active: boolean }) => {
    
    return (
        <div>
            <VACInfo active={active}/>
        </div>
    )
}

export default Info;