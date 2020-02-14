import React from 'react';
import './app.scss';
import { withBookstoreService } from '../hoc';

function App({ bookstoreService }) {
  console.log(bookstoreService.getBooks());

  return <div>App</div>;
}

export default withBookstoreService()(App);
