import React from 'react';
import './app.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from '../main/main';
import Detailed from '../detailed/detailed';
import Error from '../error/error';
import Header from '../header/header';
import Favorites from '../favorites/favorites';
import SearchResults from '../searchResults/searchResults';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/detailed/:id' component={Detailed} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/search-results' component={SearchResults} />
          <Route path='/error' component={Error} />
          <Redirect to='/' />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
