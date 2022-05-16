import React, { useState } from 'react';
import { IBox } from '../box_list/box_list';
import BoxPreview from '../box_preview/box_preview';
import styles from './box_item.module.css';

const BoxItem = ({ isDark, box }: { isDark: boolean, box: IBox }) => {
    const [preview, setPreview] = useState<boolean>(false);

    return (
        <div
            className={`${styles.box} ${isDark && styles.dark}`}
            style={{ background: box.color }}
            onMouseEnter={() => {
                setPreview(true);
            }}
            onMouseLeave={() => {
                setPreview(false);
            }}
        >
            {preview && <BoxPreview box={box} />}
        </div>
    );
};

export default React.memo(BoxItem);