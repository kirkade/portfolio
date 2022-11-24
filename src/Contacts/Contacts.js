import React from 'react';
import styles from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";


export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2> Contact me</h2>
                <div className={styles.contacts}>
                    <form action="" method="get" className={styles.form}>
                        <div className={styles.formName}>
                            <label htmlFor="Company name" > </label>
                            <input type="text" name="name" id="name" required placeholder={'Name:'}/>
                        </div>
                        <div className={styles.formEmail}>
                            <label htmlFor="email" ></label>
                            <input type="email" name="email" id="email" required placeholder={'Email:'}/>
                        </div>
                        <div>
                            <textarea name="message" placeholder={'Enter your message'} className={styles.textarea}></textarea>
                        </div>
                        <div className={styles.submit}>
                            <input type="submit" value="Send message"/>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

