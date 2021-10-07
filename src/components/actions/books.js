import axios from 'axios';
import { setFetchError, setIsFetching, setBooks } from '../../reducers/booksReducer';

export const getBooks = (searchQuery = 'javascript') => {
  if (searchQuery == '') {
    searchQuery = 'javascript';
  }
  return async dispatch => {
    try {
      dispatch(setIsFetching(true));
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=AIzaSyCIrsl3w_XRZuHC0tQV37htWZXRm17HSDk&maxResults=30`,
      );
      dispatch(setBooks(response.data));
    } catch (e) {
      dispatch(setFetchError(true));
      dispatch(setIsFetching(false));
      setTimeout(() => {
        dispatch(setFetchError(false));
      }, 2000);
    }
  };
};

export const getCurrentBook = async (bookId, setBook) => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}?`);
  setBook(response.data);
};
