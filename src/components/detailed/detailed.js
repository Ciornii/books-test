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
    console.log(favorites);

    dispatch(setFavorite(book));
  };
  console.log(favorites);

  return (
    <div>
      <button onClick={() => props.history.goBack()} className='back-btn'>
        BACK
      </button>
      {book ? (
        <>
          <div className='detailed'>
            <div className='detailed__title'>{book?.volumeInfo?.title}</div>
            <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt='' />
            <div className='detailed__subtitle'>{book?.volumeInfo?.subtitle}</div>
            <div className='detailed__desc'>{book?.volumeInfo?.description}</div>
          </div>
          <button onClick={() => favoriteHandler(book)} className='favorite'>
            favorite
          </button>
          {favoriteClass && <div>Is favorite</div>}
        </>
      ) : (
        <div className='fetching'></div>
      )}
    </div>
  );
};
export default Detailed;
