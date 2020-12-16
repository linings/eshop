import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import AddProducts from './components/article/addProducts';
import MyOrders from './components/myOrdersPage';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/addProducts" exact component={AddProducts} />
        <Route path="/products" exact component={Home} />
        <Route path="/myOrders" exact component={MyOrders} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
