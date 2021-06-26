import React from 'react';
import styles from './Catalog.module.css';

export function ItemList() {
    return <section className="grid width">
        <div className={styles.list}>
            <img src="/images/Logo_ML@2x.png.png.png"></img>
            <div className={styles.item_details}>
                <h4>asdf</h4>
                <h6>asdfasd</h6>
            </div>
        </div>
        <div className={styles.list}>
            <img src="/images/Logo_ML@2x.png.png.png"></img>
            <div className={styles.item_details}>
                <h4>asdf</h4>
                <h6>asdfasd</h6>
            </div>
        </div>
        <div className={styles.list}>
            <img src="/images/Logo_ML@2x.png.png.png"></img>
            <div className={styles.item_details}>
                <h4>asdf</h4>
                <h6>asdfasd</h6>
            </div>
        </div>
    </section>

}