import React from 'react';
import './favorites.scss';
import { useSelector } from 'react-redux';
import Book from '../main/book/book';

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
        <i className='fas fa-arrow-alt-circle-left'></i>
      </button>
      <h1>Favorites</h1>

      {isFetching === false ? (
        <div className='books-wrapper'>
          {favorites.length > 0 ? (
            favorites.map(book => <Book book={book} key={book.id} />)
          ) : (
            <p className='no-result'>You don't have favorites books</p>
          )}
        </div>
      ) : (
        <div className='fetching'></div>
      )}
    </div>
  );
};
export default Favorites;
