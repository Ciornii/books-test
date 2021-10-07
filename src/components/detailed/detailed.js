import React, { useState, useEffect } from 'react';
import './detailed.scss';
import { getCurrentBook } from '../actions/books';
import { useParams } from 'react-router-dom';

const Detailed = props => {
  const { id } = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    getCurrentBook(id, setBook);
  }, []);

  return (
    <div>
      <button onClick={() => props.history.goBack()} className='back-btn'>
        BACK
      </button>
      {book ? (
        <div className='detailed'>
          <div className='detailed__title'>{book?.volumeInfo?.title}</div>
          <img src={book?.volumeInfo?.imageLinks?.small} alt='' />
          <div className='detailed__subtitle'>{book?.volumeInfo?.subtitle}</div>
          <div className='detailed__desc'>{book?.volumeInfo?.description}</div>
        </div>
      ) : (
        <div className='fetching'></div>
      )}
    </div>
  );
};
export default Detailed;
