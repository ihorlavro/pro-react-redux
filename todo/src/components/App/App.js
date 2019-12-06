import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import AddItem from '../AddItem';

import 'uikit/dist/js/uikit.min';
import 'uikit/dist/css/uikit.min.css';

import './App.scss';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Build React and Redux app'),
      this.createTodoItem('Build React app'),
      this.createTodoItem('Drink juice')
    ],
    term: '',
    filter: 'all'
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  };

  getIndex(arr, id) {
    return arr.findIndex((el) => el.id === id);
  };

  toggleProperty(arr, id, propertyName) {
    const index = this.getIndex(arr, id);

    const oldItem = arr[index];
    const newItem = {
      ...oldItem,
      [propertyName]: !oldItem[propertyName]
    };

    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ]
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = this.getIndex(todoData, id);

      return {
        todoData: [
          ...todoData.slice(0, index),
          ...todoData.slice(index + 1)
        ]
      }
    });
  };

  addItem = (e, label) => {
    e.preventDefault();

    this.setState(({ todoData }) => {
      return {
        todoData: [
          ...todoData,
          this.createTodoItem(label)
        ]
      }
    });
  };

  search(items, term) {
    if(!term) return items;
    return items.filter(item => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  onSearchChange = term => {
    this.setState({ term });
  };

  onFilterChange = filter => {
    this.setState({ filter });
  };

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter(item => !item.done);
      case 'done':
        return items.filter(item => item.done);
      default:
        return items;
    }
  };

  render() {
    const { todoData, term, filter } = this.state;
    const doneCount = todoData.filter(item => item.done).length;
    const todoCount = todoData.length - doneCount;
    const visibleItems = this.search(todoData, term);
    const filteredItems = this.filter(visibleItems, filter);

    return (
      <div className="todo">
        <AppHeader todoCount={todoCount} doneCount={doneCount} />
        <SearchPanel
          onSearchChange={this.onSearchChange}
          onFilterChange={this.onFilterChange}
          filter={filter}
        />
        <TodoList
          todos={filteredItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItem onAddItem={this.addItem} />
      </div>
    )
  }
}
