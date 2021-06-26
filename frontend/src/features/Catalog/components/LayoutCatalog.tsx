import React from 'react';
import { BreadCrumb } from './Breadcrumb';
import styles from './Catalog.module.css';
import { ItemDetail } from './ItemDetail';
import { ItemList } from './ItemList';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from "react-router-dom";

export function LayoutCatalog() {
    return <Router>
        <div>
            <BreadCrumb />
            <Route path="/items" exact>
                <ItemList />
            </Route>
            <Route path="/items/:id">
                <ItemDetail />
            </Route>
        </div>
    </Router>

}