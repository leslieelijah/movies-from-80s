import * as types from '../actions/actionsTypes';

export default function moviesReducer(state = [], action) {
 switch(action.type) {
     case types.LOAD_MOVIES_PENDING:
         return action.movies;

     case types.LOAD_MOVIES_SUCCESS:
         return action.movies;

     case types.LOAD_MOVIES_FAIL:
         return action.error;

     default:
         return state;
 }
}
