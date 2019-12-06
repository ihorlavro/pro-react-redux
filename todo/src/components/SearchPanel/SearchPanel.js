import React, { Component } from 'react';

import Filter from '../Filter';

import './SearchPanel.scss';

export default class SearchPanel extends Component {
  state = {
    term: ''
  };

  onSearchChange = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term)
  };

  render() {
    return (
      <div className="todo__search">
        <form className="search-panel">
          <input
            className="uk-input"
            type="text"
            id="search"
            placeholder="Search..."
            onChange={this.onSearchChange}
          />
        </form>
        <Filter filter={this.props.filter} onFilterChange={this.props.onFilterChange} />
      </div>
    )
  }
}
