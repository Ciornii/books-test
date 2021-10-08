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

export const setFavorite = bookId => ({ type: SET_FAVORITE, payload: bookId });
