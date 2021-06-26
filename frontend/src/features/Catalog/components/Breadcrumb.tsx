import React from 'react';
import styles from './Catalog.module.css';

export function BreadCrumb() {
    return <section className="grid width">
        <div className={styles.breadcrumb}>
            {[1, 2, 3, 4, 5].map((data) => {
                return <h4 key={data}> asdfasdf &nbsp; &gt; &nbsp;&nbsp;</h4>
            })}
        </div>
    </section>
}