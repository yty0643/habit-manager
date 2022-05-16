import React from 'react';
import { IBoxes } from './box_list';
import BoxItem from '../box_item/box_item';
import styles from './box_list.module.css';

const VACBoxList = ({ boxes }: { boxes: IBoxes }) => {
    return (
        <ul className={styles.boxList}>
            {Object.keys(boxes).map(key => (
                <BoxItem
                    key={key}
                    box={boxes[key]}
                />
            ))}
        </ul>
    )
}
export default React.memo(VACBoxList);