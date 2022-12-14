import React from 'react';
import styles from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";


export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <div className={styles.pageTitle}>
                    <h2> Contact me</h2>
                </div>


                <div className={styles.contacts}>
                    <form action="" method="get" className={styles.form}>
                        <div>
                            <label htmlFor="Company name"> </label>
                            <input type="text" name="name" id="name" required placeholder={'Name:'}/>
                        </div>
                        <div>
                            <label htmlFor="email"></label>
                            <input type="email" name="email" id="email" required placeholder={'Email:'}/>
                        </div>
                        <div>
                            <textarea name="message" placeholder={'Enter your message'}
                                      className={styles.textarea}></textarea>
                        </div>
                        <div className={styles.submit}>
                            <input type="submit" value="Send"/>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
};

