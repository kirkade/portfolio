import React from "react";
import styles from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";


export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h3 style={{backgroundColor:'aquamarine'}}>Kirill Kadegrob</h3>
                <div className={styles.links}>
                    <div className={styles.link}>
                        <img src="" alt="inst"/>
                    </div>
                    <div className={styles.link}>
                        <img src="" alt="vk"/>
                    </div>
                    <div className={styles.link}>
                        <img src="" alt="telegram"/>
                    </div>
                    <div className={styles.link}>
                        <img src="" alt="linkedin"/>
                    </div>
                </div>
                <h4>© 2022 Все права защищены</h4>
            </div>
        </div>
    )
}