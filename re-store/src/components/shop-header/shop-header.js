import React from 'react';
import { Link } from 'react-router-dom';
import './shop-header.scss';

function ShopHeader({ numItems, total }) {
  return (
    <header className="shop-header row">
      <div className="container">
        <Link to="/">
          <div className="logo text-dark">ReStore</div>
        </Link>
        <Link to="/cart" className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${total})
        </Link>
      </div>
    </header>
  );
}

export default ShopHeader;
