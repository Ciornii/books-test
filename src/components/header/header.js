import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Link, useHistory } from 'react-router-dom';
import { getBooks } from '../actions/books';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setTerm } from '../../reducers/termReducer';

const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const favorites = useSelector(state => state.favorites.items);
  const history = useHistory();

  const searchHandler = () => {
    dispatch(setTerm(searchValue));
    const urlEncodedTerm = encodeURI(searchValue);
    history.push(`/search-results?${urlEncodedTerm}`);
    setSearchValue('');
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <Link className='header__logo' to='/' title='home'>
            <i className='fas fa-book-open'></i>Books App
          </Link>
          <div className='header__search'>
            <input
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              type='text'
              placeholder='Input book name'
            />
            <button onClick={() => searchHandler()}>
              <i className='fas fa-search'></i>
            </button>
          </div>
          <NavLink className='header__favorites' to={`/favorites`} title='favorites'>
            <i className='fas fa-star'></i>
            <div className='header__counter'>{favorites.length}</div>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
export default Header;
