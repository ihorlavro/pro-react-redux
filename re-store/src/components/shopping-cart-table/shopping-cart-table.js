import React from 'react';
import { connect } from 'react-redux';
import './shopping-cart-table.scss';

function ShoppingCartTable({ items, total, onIncrease, onDecrease, onDelete }) {
  const renderRow = (item, index) => {
    const { id, title, count, totalPrice } = item;

    return (
      <tr key={id}>
        <td>{index + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${totalPrice}</td>
        <td className="buttons-group">
          <button
            type="button"
            className="btn btn-outline-danger btn-small"
            onClick={() => onDelete(id)}
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            type="button"
            className="btn btn-outline-success btn-small"
            onClick={() => onIncrease(id)}
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            type="button"
            className="btn btn-outline-warning btn-small"
            onClick={() => onDecrease(id)}
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Total: ${total}</div>
    </div>
  );
}

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: id => {
      console.log(`Increase ${id}`);
    },
    onDecrease: id => {
      console.log(`Decrease ${id}`);
    },
    onDelete: id => {
      console.log(`Delete ${id}`);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
