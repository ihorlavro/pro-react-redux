import React, { Component } from 'react';

import './AddItem.scss';

export default class AddItem extends Component {
  state = {
    inputValue: ''
  };

  onLableChange = e => {
    e.preventDefault();

    this.setState({
      inputValue: e.target.value
    });
  };

  onSubmitForm = e => {
    e.preventDefault();

    if(this.state.inputValue === '') return;

    this.props.onAddItem(e, this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <form
        className="add-item-form"
        onSubmit={this.onSubmitForm}
      >
        <input
          className="uk-input"
          type="text"
          id="add-new-item"
          onChange={this.onLableChange}
          value={inputValue}
          placeholder="Item text"
        />
        <button
          type="submit"
          className="uk-button uk-button-primary"
        >
          Add item
        </button>
      </form>
    );
  }
}
