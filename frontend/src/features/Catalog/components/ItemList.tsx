import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import { FormatCurrency, SearchCatalogByInfoString } from '../services/searchService';
import styles from './Catalog.module.css';

export function ItemList() {

    const [items, setItems] = useState<any>()

    const location = useLocation();

    const history = useHistory();

    useEffect(() => {
        SearchCatalogByInfoString(location.search.split('=')[1])
            .then((res: any) => {
                setItems(res.data[0].items);
            })
    }, [location])

    const OnSelect = (item: any) => {
        history.push(`/items/${item.id}`)
    }

    return <section className="grid width">
        {
            items ? (items as Array<any>).map((info: any, index: any) => {
                return <div key={index} className={styles.list} onClick={() => OnSelect(info)}>
                    <img src={info.picture} alt={info.title}></img>
                    <div className={styles.item_details}>
                        <h4>{FormatCurrency(info.price.amount)} {info.price.currency}</h4>
                        <h6>{info.title}</h6>
                    </div>
                </div>
            }) : ''
        }

    </section>
}