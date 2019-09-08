import { combineReducers } from 'redux';
import movies from './moviesRecuder';

const rootReducer = combineReducers({
    movies
});

export default rootReducer;
