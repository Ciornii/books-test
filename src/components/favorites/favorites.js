import React, { useEffect, useState } from 'react';
import './favorites.scss';
import { getBooks } from '../actions/books';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Favorites = props => {
  return (
    <div>
      <button onClick={() => props.history.goBack()} className='back-btn'>
        BACK
      </button>
      <div>favorites</div>
    </div>
  );
};
export default Favorites;
