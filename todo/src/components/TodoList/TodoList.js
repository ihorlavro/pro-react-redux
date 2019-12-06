import React from 'react';

import TodoListItem from '../TodoListItem';

import './TodoList.scss';

function TodoList({ todos, onDeleted, onToggleImportant, onToggleDone }) {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li className="" key={id}>
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    )
  });

  return (
    <ul className="uk-list">
      { elements }
    </ul>
  );
}

export default TodoList;
