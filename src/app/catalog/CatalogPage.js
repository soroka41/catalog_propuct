import React from 'react';
import { Link } from 'react-router';



class CatalogPage extends React.Component {
    render() {
        return (
          <div>
              <div>
                <h1>Список всех категорий</h1>
              </div>
                <div className= "col-md-12">
                  <ul className="list">
                    <li><Link to="category_1">Категория_1</Link></li>
                    <li><Link to="category_1">Категория_2</Link></li>
                  </ul>
                </div>
          </div>
        );
    }
}

export default CatalogPage;
