import * as types from './actionsTypes';

export function loadMoviesPending() {
    return { type: types.LOAD_MOVIES_PENDING };
}

export function loadMoviesSuccess(movies) {
    return { type: types.LOAD_MOVIES_SUCCESS, movies };
}

export function loadMoviesFail(error) {
    return {type: types.LOAD_MOVIES_FAIL, error};
}

export function loadMovies() {
    return function(dispatch) {
        return fetch('http://demo9595712.mockable.io/getTopFiveMovies')
            .then((res) => res.json())
            .then((movies) => dispatch(loadMoviesSuccess(movies.components[1].items)))
            .catch(error => { throw error; });
    }
}
