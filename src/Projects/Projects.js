import React from 'react';
import {Project} from "./Project/Project";
import styles from "../Projects/Projects.module.css";
import styleContainer from "../common/styles/Container.module.css";
import first_logo from '../Projects/first_project_logo.jpg'
import second_logo from '../Projects/second_project_logo.jpeg'

export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2> My projects</h2>
                <div className={styles.projects}>
                    <Project name={'My first project'} description={'Description of the first project'} logo={first_logo}/>
                    <Project name={'My second project'} description={'Description of the second project'} logo={second_logo}/>
                </div>

            </div>
        </div>
    );
};

