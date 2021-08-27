import React from 'react';
// react router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../main.scss';
import Navbar from './Navbar.js';
import Home from './pages/Home.js';
import Products from './pages/Products.js';
import Services from './pages/Services.js';
import SignUp from './pages/SignUp.js';

const App = () => {
  return (
    <div className="container">
      {/* BrowserRouter 放最外層 */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <Route path="/" component={Navbar} />

        {/* Switch 可以阻止單個頁面載入多個Route */}
        <Switch>
          {/* 特定地址(path) 載入的頁面(component) 地址必須完全相符(exact) */}
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
