import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><IndexLink to="/">Главная</IndexLink></li>
                        <li><Link to="catalog">Каталог товаров</Link></li>
                        <li><Link to="online">Каталог offline</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
