import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchCatalogByInfoString } from '../services/searchService';
import styles from './Catalog.module.css';

export function BreadCrumb() {

    const [items, setItems] = useState<any>()

    const location = useLocation();

    useEffect(() => {
        if (location.search.includes('=')) {
            SearchCatalogByInfoString(location.search.split('=')[1])
                .then((res: any) => {
                    setItems(res.data[0].categories);
                })
        }
    }, [location])

    return <section className="grid width">
        <div className={styles.breadcrumb}>
            {
                items ? items.map((data: string) => {
                    return <h4 key={data}> {data} &nbsp; &gt; &nbsp;&nbsp;</h4>
                }) : ''
            }
        </div>
    </section>
}