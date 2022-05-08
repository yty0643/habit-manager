import React from 'react';
import { IBoxes } from '../../VC/mini_box/mini_box';
import styles from './VAC_mini_box.module.css';

const VACMiniBox = ({ active, boxes}: { active: boolean, boxes:IBoxes}) => {

    return (
        <div className={`${styles.container} ${active && styles.active}`}>
                {Object.keys(boxes).map(key => {
                    return (
                        <div
                            key={key}
                            className={styles.box}
                            style={
                                { backgroundColor: boxes[Number(key)].bgColor }
                            }>
                        </div>
                    )
                })}
            </div>
    )
}
export default VACMiniBox;