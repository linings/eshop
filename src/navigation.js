import React, { useContext } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import AddProducts from './components/article/addProducts';
import UserContext from './Context';

const Navigation = () => {
  const context = useContext(UserContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/addProducts" exact component={AddProducts} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
