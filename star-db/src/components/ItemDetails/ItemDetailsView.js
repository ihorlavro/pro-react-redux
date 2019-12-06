import React, { Fragment } from 'react';

const ItemDetailsView = props => {
  const { item, image } = props;

  return (
    <Fragment>
      <img className="item-image" src={image} alt="" />
      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(props.children, child => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default ItemDetailsView;
