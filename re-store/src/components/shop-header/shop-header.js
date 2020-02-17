import React from 'react';
import './shop-header.scss';

function ShopHeader({ numItems, total }) {
  return (
    <header className="shop-header row">
      <div className="container">
        <a href="#" className="logo text-dark">
          ReStore
        </a>
        <a href="#" className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${total})
        </a>
      </div>
    </header>
  );
}

export default ShopHeader;
