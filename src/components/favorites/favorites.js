import React, { useEffect, useState } from 'react';
import './favorites.scss';
import { getBooks } from '../actions/books';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Book from '../main/book/Book';

const Favorites = props => {
  const favorites = useSelector(state => state.favorites.items);
  const isFetching = useSelector(state => state.books.isFetching);
  const isFetchError = useSelector(state => state.books.isFetchError);

  return (
    <div>
      {isFetchError && (
        <div className='alert alert-danger' role='alert'>
          Error. Please refresh page.
        </div>
      )}

      <button onClick={() => props.history.goBack()} className='back-btn'>
        BACK
      </button>

      {isFetching === false ? (
        <div className='books-wrapper'>
          {favorites.map(book => (
            <Book book={book} />
          ))}
        </div>
      ) : (
        <div className='fetching'></div>
      )}
    </div>
  );
};
export default Favorites;
