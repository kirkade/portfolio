import React from 'react';
import {Project} from "./Project/Project";
import styles from "../Projects/Projects.module.css";
import styleContainer from "../common/styles/Container.module.css";


export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2 style={{backgroundColor:'aquamarine'}}> My projects</h2>
                <div className={styles.projects}>
                    <Project title={'My first project name'} description={'Description of the first project'} />
                    <Project title={'My second project name'} description={'Description of the second project'} />
                </div>

            </div>
        </div>
    );
};

