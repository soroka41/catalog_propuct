import React from 'react';

class CategoryPage extends React.Component {
  render() {
        return (
          <div>
            <div className = "row">
              <h1>Список продуктов</h1>
            </div>
            <div className="row">
              <div className="col-md-12">
                <ul className="list">
                  <li>Продукт_1</li>
                  <li>Продукт_2</li>
                  <li>Продукт_3</li>
                  <li>Продукт_4</li>
                  <li>Продукт_5</li>
                  <li>Продукт_6</li>
                </ul>
              </div>
            </div>
          </div>
    );
  }
}

export default CategoryPage;
