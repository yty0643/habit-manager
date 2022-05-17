import React from 'react';
import { IBox } from '../box_list/box_list';
import styles from './box_preview.module.css';

const BoxPreview = ({ isDark, box }: { isDark: boolean, box: IBox }) => {
    return (
        <div className={styles.preview}>
            <p className={styles.value}>{Object.keys(box.habitTime).length}</p>
            <p className={styles.description}>records in</p>
            <p className={styles.value}>{box.date}</p>
        </div>
    )
}
export default BoxPreview;