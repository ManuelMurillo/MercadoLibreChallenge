import { BreadCrumb } from './Breadcrumb';
import { ItemDetail } from './ItemDetail';
import { ItemList } from './ItemList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export function LayoutCatalog() {
    return <div>
        <BreadCrumb />
        <Switch>
            <Route path="/items" exact>
                <ItemList />
            </Route>
            <Route path="/items/:id">
                <ItemDetail />
            </Route>
        </Switch>
    </div>
}
