import React from 'react';
import { IBox } from '../../VC/box/box';
import styles from './box_preview.module.css';

const BoxPreview = ({ box }: { box: IBox }) => {

    return (
        <div className={styles.preview}>
            <p>{box.date}</p>
            {Object.keys(box.habitTime).map(key => {
                return (
                    <p key={key}>{box.habitTime[Number(key)]}</p>
                )
            })}
            <p>{box.totalTime}</p>
        </div>
    )
}
export default BoxPreview;