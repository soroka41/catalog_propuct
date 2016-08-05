import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app/App';
import HomePage from './app/home/HomePage';
import CatalogPage from './app/catalog/CatalogPage';
import CategoryPage from './app/category/CategoryPage';
import CategoryPage_1 from './app/category_1/CategoryPage_1';
import OnlinePage from './app/online/OnlinePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="catalog" component={CatalogPage} />
        <Route path="category" component={CategoryPage} />
        <Route path="category_1" component ={CategoryPage_1} />
        <Route path="online" component={OnlinePage} />
    </Route>
);
