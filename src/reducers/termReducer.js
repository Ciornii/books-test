const SET_TERM = 'SET_TERM';

const defaultState = {
  searchTerm: '',
};

export default function termReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_TERM:
      return {
        searchTerm: action.payload,
      };
    default:
      return state;
  }
}

export const setTerm = searchTerm => ({ type: SET_TERM, payload: searchTerm });
