import React from 'react';
import {Project} from "./Project/Project";
import styles from "../Projects/Projects.module.css";
import styleContainer from "../common/styles/Container.module.css";


export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <div className={styles.pageTitle}>
                    <h2> My projects</h2>
                </div>
                <div className={styles.projects}>
                    <Project title={'Development'} description={'Todolist'} />
                    <Project title={'Development'} description={'Social Network'} />
                </div>

            </div>
        </div>
    );
};

