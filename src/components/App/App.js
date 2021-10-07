import React from 'react';
import './app.scss';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from '../main/Main';
import Detailed from '../detailed/Detailed';
import Error from '../error/Error';
import Header from '../header/Header';
import Favorites from '../favorites/Favorites';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/detailed/:id' component={Detailed} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/error' component={Error} />
          <Redirect to='/' />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
