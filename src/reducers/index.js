import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import booksReducer from './booksReducer';
import termReducer from './termReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { loadStateFromLocalStorage, saveStateToLocalStorage } from '../localStorage';
import throttle from 'lodash/throttle';

const rootReducer = combineReducers({
  books: booksReducer,
  term: termReducer,
});

const persistedState = loadStateFromLocalStorage();

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(
  throttle(() => {
    saveStateToLocalStorage(store.getState());
  }, 1000),
);

export default store;
