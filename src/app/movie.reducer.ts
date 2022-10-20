import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { loadMovies } from './movie.action';
import { IMovie } from './my-movies/my-movies.service';

export const initialState: IMovie = {
    id:0,
    image: '',
    price: 0,
    type: '',
    title: '',
  };

  export const movieReducer = createReducer(
    initialState.title,
    on(loadMovies, state => state)
  );