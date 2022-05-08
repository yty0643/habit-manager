import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from './link_btn.module.css';

interface IItem{
    href: string,
    icon: IconDefinition, 
};

const LinkBtn = ({ active, item }: { active: boolean, item: IItem }) => {
    return (
        <a className={`${styles.linkBtn} ${active && styles.active}`} href={item.href} target="_blank">
            <p className={styles.title}>Visit!</p>
            <FontAwesomeIcon icon={item.icon} />
        </a>
    )
};

export default LinkBtn;