import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { ShowAllMoviesFailedAction, ShowAllMoviesSuccessAction } from './movie.action';
import { MovieState } from './statesTypes/movie.type';

export const initialState: MovieState = {movies: [], message: ''};

const _movieReducer = createReducer(
    initialState,
    on(ShowAllMoviesSuccessAction, (state, {payload}) => ({movies: payload, message: 'Success'})),
    on(ShowAllMoviesFailedAction, (state, {payload}) => ({movies: payload, message: 'Failed'}))
);

export function movieReducer(state: any, action: Action) {
  return _movieReducer(state, action);
}

// Creating selectors
export const getMovieState = createFeatureSelector<MovieState>('articleState');

export const getMovies = createSelector(
    getMovieState, 
    (state: MovieState) => state.movies
);

export const getMsg = createSelector(
  getMovieState, 
  (state: MovieState) => state.message
);