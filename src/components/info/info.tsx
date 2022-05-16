import React from 'react';
import VACInfo from './VAC_info';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const Info = ({ active }: { active: boolean }) => {
    return (
        <VACInfo active={active} />
    );
};

export default Info;