import React from 'react';
import styles from './Catalog.module.css';

export function ItemDetail() {
    return <section className="grid width">
        <div className={styles.card}>
            <div className="grid">
                <img src="/images/Logo_ML@2x.png.png.png" className={styles.image_display}></img>
                <div className={styles.details}>
                    <h6>asdfasd</h6>
                    <h4>asdf</h4>
                    <h3>asdfasd</h3>
                    <button>asdfasd</button>
                </div>
            </div>
            <div className={styles.description}>
                <h3>Descripcion del Producto</h3>
                <p>asdfasdfasdfasdfasdfasdfasdfasdfasdfas</p>
            </div>
        </div>
    </section>

}