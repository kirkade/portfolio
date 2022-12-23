import React from 'react';
import styles from "./Project.module.css";


export const Project = (props) => {
    return (
        <div className={styles.project}>
                <div className={styles.imgContainer}>
                </div>
            <div className={styles.textContainer}>
                <div className={styles.name}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
            </div>
        </div>
    );
};

