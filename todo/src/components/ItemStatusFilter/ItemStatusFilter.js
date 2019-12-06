import React, { Component } from 'react';

import './ItemStatusFilter.scss';

export default class ItemStatusFilter extends Component {
  render() {
    const { todoCount, doneCount } = this.props;

    return (
      <div className="item-status-filter uk-text-lead">
        {todoCount} more to do, {doneCount} done
      </div>
    )
  }
}
