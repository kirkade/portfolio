import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'React'} description={'React Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, nihil.'}/>
                    <Skill title={'CSS'} description={'CSS Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eveniet maxime odio repellat, vero voluptatum!'}/>
                    <Skill title={'JS'} description={'JD  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque earum ex fuga libero non perspiciatis porro possimus sequi tempore vitae.'}/>
                </div>

            </div>

        </div>
    );
};

