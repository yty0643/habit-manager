import React from 'react';
import { IBox } from '../../VC/box/box';
import styles from './box_item.module.css';

const BoxItem = ({box}: {box:IBox}) => {
    
    return (
        <div className={styles.box}>
        </div>
    )
}

export default BoxItem;