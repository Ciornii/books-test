const SET_BOOKS = 'SET_BOOKS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_FETCH_ERROR = 'SET_FETCH_ERROR';

const defaultState = {
  items: [],
  isFetching: true,
  isFetchError: false,
};

export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        items: action.payload.items,
        totalCount: action.payload.total_count,
        isFetching: false,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_FETCH_ERROR:
      return {
        ...state,
        isFetchError: action.payload,
      };
    default:
      return state;
  }
}

export const setBooks = books => ({ type: SET_BOOKS, payload: books });
export const setIsFetching = bool => ({ type: SET_IS_FETCHING, payload: bool });
export const setFetchError = bool => ({ type: SET_FETCH_ERROR, payload: bool });
