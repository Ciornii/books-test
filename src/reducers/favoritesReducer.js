const BOOK_ADDED_TO_FAVORITES = 'BOOK_ADDED_TO_FAVORITES';
const BOOK_REMOVED_FROM_FAVORITES = 'BOOK_REMOVED_FROM_FAVORITES';
const SET_FAVORITE = 'SET_FAVORITE';

const defaultState = {
  items: [],
};

export default function favoritesReducer(state = defaultState, action) {
  const { items } = state;

  switch (action.type) {
    case SET_FAVORITE:
      const bookId = action.payload.id;
      const idx = items.findIndex(({ id }) => id == bookId);
      const newItem = action.payload;

      if (idx == -1) {
        return {
          items: [...items, newItem],
        };
      } else {
        return {
          items: [...items.slice(0, idx), ...items.slice(idx + 1)],
        };
      }
    default:
      return state;
  }
}

export const addFavorite = bookId => ({ type: BOOK_ADDED_TO_FAVORITES, payload: bookId });
export const removeFavorite = bookId => ({ type: BOOK_REMOVED_FROM_FAVORITES, payload: bookId });
export const setFavorite = bookId => ({ type: SET_FAVORITE, payload: bookId });
