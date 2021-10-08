import React from 'react';
import './book.scss';
import { NavLink } from 'react-router-dom';
import { getLimitedSymbol } from '../../../utils';

const Book = props => {
  const book = props.book;

  return (
    <NavLink className='book' to={`/detailed/${book.id}`}>
      <div className='book__title'>{book?.volumeInfo?.title}</div>
      <div className='book__img'>
        <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt='' />
      </div>
      <div className='book__subtitle'>{book?.volumeInfo?.subtitle}</div>
      <div className='book__desc'>{book?.volumeInfo?.description}</div>
    </NavLink>
  );
};

export default Book;
