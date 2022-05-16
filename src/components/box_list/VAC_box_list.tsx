import React from 'react';
import { IBoxes } from './box_list';
import BoxItem from '../box_item/box_item';
import styles from './box_list.module.css';

const VACBoxList = ({ isDark, boxes }: { isDark: boolean, boxes: IBoxes }) => {
    return (
        <div className={`${styles.section} ${isDark && styles.dark}`}>
            <ul className={`${styles.boxList} ${isDark && styles.dark}`}>
                {Object.keys(boxes).map(key => (
                    <BoxItem
                        key={key}
                        isDark={isDark}
                        box={boxes[key]}
                    />
                ))}
            </ul>
            <div className={styles.boxes}>
                <p className={styles.discription}>less</p>
                <div className={`${styles.box} ${styles.fir}`}></div>
                <div className={`${styles.box} ${styles.sec}`}></div>
                <div className={`${styles.box} ${styles.thi}`}></div>
                <div className={`${styles.box} ${styles.fou}`}></div>
                <div className={`${styles.box} ${styles.fiv}`}></div>
                <p className={styles.discription}>more</p>
            </div>
        </div>
    );
};

export default React.memo(VACBoxList);