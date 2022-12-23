import React from "react";
import styles from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'


export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container} >
                    <div className={styles.photo}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Brad_Pitt_Fury_2014.jpg/640px-Brad_Pitt_Fury_2014.jpg"
                            alt="photo"/>
                    </div>
                    <div className={styles.greetings}>
                        <div className={styles.welcome}> WELCOME TO MY WORLD</div>
                            <h1>
                                Hi,
                                <br/>
                                I'm Kirill Kade
                                <br/>

                                <span> Frontend Developer.</span>
                            </h1>
                            <h2>based in Moscow.</h2>

                    </div>
            </div>
        </div>
    )
}