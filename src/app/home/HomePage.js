import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className= "jumbotron">
                <h1>Каталог товаров</h1>
                <Link to="catalog" className="btn btn-primary btn-lg">Жми</Link>
            </div>
        );
    }
}

export default HomePage;
