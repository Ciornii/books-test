import React from 'react';
import './book.scss';
import { NavLink } from 'react-router-dom';
import { getLimitedSymbol } from '../../../utils';

const Book = props => {
  const book = props.book;

  if (book.volumeInfo.description === undefined && book.volumeInfo.imageLinks === undefined) {
    return '';
  } else {
    return (
      <NavLink className='book' to={`/detailed/${book.id}`}>
        <div className='book__title'>{getLimitedSymbol(`${book.volumeInfo?.title}`)}</div>
        <div className='book__img'>
          {book?.volumeInfo?.imageLinks?.thumbnail && (
            <img
              src={book?.volumeInfo?.imageLinks?.thumbnail}
              alt={book?.volumeInfo?.title}
              width='128'
              height='169'
              loading='lazy'
            />
          )}
        </div>
        {book.volumeInfo?.subtitle && (
          <div className='book__subtitle'>{getLimitedSymbol(`${book.volumeInfo?.subtitle}`)}</div>
        )}
        {book.volumeInfo?.description && (
          <div
            className='book__desc'
            dangerouslySetInnerHTML={{
              __html: getLimitedSymbol(`${book.volumeInfo?.description}`),
            }}
          />
        )}
      </NavLink>
    );
  }
};

export default Book;
