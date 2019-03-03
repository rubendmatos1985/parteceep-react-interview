import { combineReducers } from 'redux';
import moviesReducer from './movies';
import genreFilterReducer from './genre-filter';
import paginatorReducer from './paginator';
export default combineReducers({
  movies: moviesReducer,
  filter: genreFilterReducer,
  paginator: paginatorReducer
})