import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FormatCurrency, SearchCatalogById } from '../services/searchService';
import styles from './Catalog.module.css';

export function ItemDetail() {

    const [item, setItem] = useState<any>()

    const location = useLocation();

    useEffect(() => {
        SearchCatalogById(location.pathname.split('/')[2])
            .then((res: any) => {
                setItem(res.data.item);
            })
    }, [location])

    return <section className="grid width">
        {
            item ? <div className={styles.card}>
                <div className="grid">
                    <img src={item.picture} alt={item.title} className={styles.image_display}></img>
                    <div className={styles.details}>
                        <h6>{item.condition === 'new' ? 'Nuevo' : ''}</h6>
                        <h4>{item.title}</h4>
                        <h3>{FormatCurrency(item.price.amount)} {item.price.currency}</h3>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className={styles.description}>
                    <h3>Descripcion del Producto</h3>
                    <p>{item.description}</p>
                </div>
            </div> : ''
        }

    </section>

}