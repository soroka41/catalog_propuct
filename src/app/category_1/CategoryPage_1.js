import React from 'react';
import {Link} from 'react-router';

class CategoryPage_1 extends React.Component {
  render () {
    return(
      <div>
        <div>
          <h1>Список подкатегорий</h1>
        </div>
        <div className="container-fluid">
          <div className="col-md-12">
            <ul className="list">
              <li><Link to="category">Подкатегория_1</Link></li>
              <li><Link to="category">Податегория_2</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryPage_1;
