import React from 'react';
import VACInfo from '../../VAC/VAC_info/VAC_info';

const Info = ({ active }: { active: boolean }) => {
    
    return (
        <VACInfo active={active}/>
    )
}

export default Info;