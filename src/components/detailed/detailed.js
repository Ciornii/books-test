import React, { useState, useEffect } from 'react';
import './detailed.scss';
import { getCurrentBook } from '../actions/books';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setFavorite } from '../../reducers/favoritesReducer';

const Detailed = props => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [book, setBook] = useState();
  const favorites = useSelector(state => state.favorites.items);
  const [favoriteClass, setFavoriteClass] = useState(false);

  useEffect(() => {
    getCurrentBook(id, setBook);
  }, []);

  useEffect(() => {
    if (favorites.some(e => e.id === id)) {
      setFavoriteClass(true);
    } else {
      setFavoriteClass(false);
    }
  }, [favorites]);

  const favoriteHandler = book => {
    dispatch(setFavorite(book));
  };

  return (
    <div>
      <button onClick={() => props.history.goBack()} className='back-btn'>
        <i class='fas fa-arrow-alt-circle-left'></i>
      </button>
      {book ? (
        <div className='detailed'>
          <div className='detailed__title'>{book?.volumeInfo?.title}</div>
          <div className='detailed__img'>
            <img
              src={book.volumeInfo.imageLinks.small || book.volumeInfo.imageLinks.thumbnail}
              alt={book?.volumeInfo?.title}
              width='300'
              height='440'
            />
          </div>
          <div className='detailed__subtitle'>{book?.volumeInfo?.subtitle}</div>
          <div
            className='detailed__desc'
            dangerouslySetInnerHTML={{ __html: book?.volumeInfo?.description }}
          />
          <div
            className={`detailed__favorite ${favoriteClass ? 'active' : ''}`}
            onClick={() => favoriteHandler(book)}
            title='Set favorite'
          >
            <i class='fas fa-star'></i>
          </div>
        </div>
      ) : (
        <div className='fetching'></div>
      )}
    </div>
  );
};
export default Detailed;
