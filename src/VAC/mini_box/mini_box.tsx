import React from 'react';
import styles from './mini_box.module.css';

const MiniBox = ({ active }: { active: boolean }) => {
    interface IBox {
        [key: number]: { bgColor: number }
    };

    const box: IBox = {};

    for (let i = 0; i < 31; i++) {
        const j = Math.random() * (200 - 50) + 50;
        box[i] = { bgColor: j };
    }

    return (
        <div className={`${styles.container} ${active && styles.active}`}>
                {Object.keys(box).map(key => {
                    const rgb = box[Number(key)].bgColor;
                    return (
                        <div
                            key={key}
                            className={styles.box}
                            style={
                                { backgroundColor: `rgb(${rgb},${rgb},${rgb})` }
                            }>
                        </div>
                    )
                })}
            </div>
    )
}
export default MiniBox;