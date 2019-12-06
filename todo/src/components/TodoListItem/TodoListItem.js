import React, { Component, Fragment } from 'react';
import classNames from 'classnames';

import './TodoListItem.scss';
import iconBookmark from './icons/bookmark.svg';
import iconTrash from './icons/trash.svg';

export default class TodoListItem extends Component {
  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

    return (
      <Fragment>
        <span
          className={classNames(
            '',
            {'is-important': important},
            {'is-done': done}
          )}
          onClick={onToggleDone}
        >
          {label}
        </span>
        <div className="buttons-list">
            <button className="uk-icon-button" onClick={onDeleted}>
              <img src={iconTrash} alt=""/>
            </button>
            <button className="uk-icon-button" onClick={onToggleImportant}>
              <img src={iconBookmark} alt=""/>
            </button>
        </div>
      </Fragment>
    );
  }
}
