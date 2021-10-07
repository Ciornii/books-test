import React, { useEffect, useState } from 'react';
import './main.scss';
import { getBooks } from '../actions/books';
import { useDispatch, useSelector } from 'react-redux';
import Book from './book/Book';

const Main = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.items);
  const isFetching = useSelector(state => state.books.isFetching);
  const isFetchError = useSelector(state => state.books.isFetchError);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div>
      {isFetchError && (
        <div className='alert alert-danger' role='alert'>
          Error. Please refresh page.
        </div>
      )}

      {isFetching === false ? (
        <div className='books-wrapper'>
          {books.map(book => (
            <Book book={book} />
          ))}
        </div>
      ) : (
        <div className='fetching'></div>
      )}
    </div>
  );
};
export default Main;
