import React from 'react';
import styles from "./Project.module.css";


export const Project = (props) => {
    return (
        <div className={styles.project}>
                <div className={styles.imgContainer}>
                    <img alt="Project logo" src={props.logo} style={{width:'400px',height:'400px'}}/>
                    <button className={styles.button}>View project</button>
                </div>
            <div className={styles.textContainer}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.description}>{props.description}</div>
            </div>

        </div>
    );
};

