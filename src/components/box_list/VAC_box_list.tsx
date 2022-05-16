import React from 'react';
import { IBoxes } from './box_list';
import BoxItem from '../box_item/box_item';
import styles from './box_list.module.css';

const VACBoxList = ({ isDark, boxes }: { isDark: boolean, boxes: IBoxes }) => {
    return (
        <ul className={`${styles.boxList} ${isDark && styles.dark}`}>
            {Object.keys(boxes).map(key => (
                <BoxItem
                    key={key}
                    isDark={isDark}
                    box={boxes[key]}
                />
            ))}
        </ul>
    );
};

export default React.memo(VACBoxList);