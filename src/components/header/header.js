import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Link, useHistory } from 'react-router-dom';
import { getBooks } from '../actions/books';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  function searchHandler() {
    dispatch(getBooks(searchValue));
  }

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <Link className='header__logo' to='/'>
            Home
          </Link>
          <div className='header__search'>
            <input
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              type='text'
              placeholder='Input repo name'
            />
            <button onClick={() => searchHandler()}>Search</button>
          </div>
          <NavLink className='header__favorites' to={`/favorites`}>
            Favorites
          </NavLink>
        </div>
      </div>
    </header>
  );
};
export default Header;
