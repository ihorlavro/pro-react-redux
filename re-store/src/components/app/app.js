import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

import './app.scss';

function App() {
  return (
    <>
      <ShopHeader numItems={5} total={210} />
      <main role="main" className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </main>
    </>
  );
}

export default App;
