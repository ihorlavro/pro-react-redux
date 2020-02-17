import React from 'react';

import './book-list-item.scss';

function BookListItem({ book }) {
  const { title, author, price, cover } = book;

  return (
    <div className="bookt-list-item">
      <div className="book-cover">
        <img src={cover} alt="" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">{`$${price}`}</div>
        <button type="button" className="btn btn-primary">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default BookListItem;
