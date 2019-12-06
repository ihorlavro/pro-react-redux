import React, { Component } from 'react';

import Spinner from '../Spinner';
import ItemDetailsView from './ItemDetailsView';

import './ItemDetails.scss';

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    loading: false
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl
    ) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    this.setState({ loading: true });

    getData(itemId).then(item => {
      this.setState({
        loading: false,
        image: getImageUrl(item),
        item
      });
    });
  }

  render() {
    if (!this.state.item) {
      return <span>Select item</span>;
    }

    const { item, image, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? (
      <ItemDetailsView item={item} image={image}>
        {this.props.children}
      </ItemDetailsView>
    ) : null;

    return (
      <div className="item-details card">
        {spinner}
        {content}
      </div>
    );
  }
}

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };
