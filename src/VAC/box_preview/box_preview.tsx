import React from 'react';
import { IBox } from '../box_list/box_list';
import styles from './box_preview.module.css';

const BoxPreview = ({ box }: { box: IBox }) => {

    return (
        <div className={styles.preview}>
            <p>{Object.keys(box.habitTime).length}</p>
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