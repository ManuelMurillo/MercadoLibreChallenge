import React from 'react';
import styles from './Search.module.css';

export function SearchBar() {
    return <header>
        <nav className={`grid primary_color width`}>
            <img src="/images/Logo_ML.png" className={styles.row_search_icon}></img>
            <input
                className={styles.row_search_input}
                type="text"
                placeholder="Nunca dejes de buscar"
            />
            <button className={styles.row_search_submit}>
                <img src="/images/ic_Search.png"></img>
            </button>
        </nav>
    </header>
}