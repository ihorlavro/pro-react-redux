import React, { Component } from 'react';
import classNames from 'classnames';

import './Filter.scss';

export default class Filter extends Component {
  buttons = [
    {
      name: 'all',
      label: 'All'
    },
    {
      name: 'active',
      label: 'Active'
    },
    {
      name: 'done',
      label: 'Done'
    }
  ];

  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const buttonClasses = classNames(
        'uk-button uk-button-default',
        {'uk-button-primary': name === filter}
      );

      return(
        <button
          className={buttonClasses}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return(
      <div className="filter">
        {buttons}
      </div>
    )
  }
}
