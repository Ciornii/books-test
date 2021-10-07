import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import booksReducer from './booksReducer';
import termReducer from './termReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  books: booksReducer,
  term: termReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
