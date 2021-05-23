import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { isUserLoggedIn } from './actions';
import './App.css';
import Category from './containers/Categories/categories';
import Home from './containers/Home/Home';
import Orders from './containers/Orders/orders';
import Products from './containers/Products/Products';
import Signin from './containers/signin/Signin';
import Signup from './containers/signup/signup';
import SecuredRoute from './HOC/SecuredRoute';

function App() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.authenticate)
      dispatch(isUserLoggedIn())
  }, [])



  return (
    <>
      <Switch>
        <SecuredRoute path='/' exact component={Home} />
        <SecuredRoute path='/orders' exact component={Orders} />
        <SecuredRoute path='/products' exact component={Products} />
        <SecuredRoute path='/category' exact component={Category} />
        <Route path="/signin" component={Signin} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </>
  );
}

export default App;
