import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Search.module.css';

export function SearchBar() {

    let history = useHistory<any>()
    const [text, setText] = useState('');


    const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)
    }
    const OnSubmit = () => {
        history.push(`/items?q=${text}`);
    }
    const Search = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            OnSubmit();
        }
    }

    return <header>
        <nav className={`grid primary_color width`}>
            <img src="/images/Logo_ML.png" className={styles.row_search_icon} alt="Logo Mercado Libre"></img>
            <input
                className={styles.row_search_input}
                type="text"
                placeholder="Nunca dejes de buscar"
                onChange={HandleChange}
                onKeyUp={Search}
            />
            <button className={styles.row_search_submit} onClick={OnSubmit} >
                <img src="/images/ic_Search.png" alt="Boton de Busqueda" ></img>
            </button>
        </nav>
    </header>
}