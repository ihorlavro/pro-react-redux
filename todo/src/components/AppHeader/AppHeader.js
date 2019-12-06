import React from 'react';

import ItemStatusFilter from '../ItemStatusFilter';

import './AppHeader.scss';

function AppHeader({ todoCount, doneCount }) {
  return (
    <header>
      <h1 className="uk-heading-medium">Todo list</h1>
      <ItemStatusFilter todoCount={todoCount} doneCount={doneCount}  />
    </header>
  )
}

export default AppHeader;
