import React from 'react';
import { IBox } from '../../VC/box/box';
import styles from './box_item.module.css';

const BoxItem = ({ box }: { box: IBox }) => {
    const color = "rgb(200, 200, 200)";
    return (
        <div className={styles.box} style={{background: color}}>
        </div>
    )
}

export default BoxItem;