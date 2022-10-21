import { createAction, props } from "@ngrx/store";
import { IMovie } from "./statesTypes/movie.type";

export const ShowAllMovies = createAction('[ARTICLE] Show All');
export const ShowAllMoviesSuccessAction = createAction('[ARTICLE] Show All Success', props<{ payload: IMovie[]}>());
export const ShowAllMoviesFailedAction = createAction('[ARTICLE] Show All Failed', props<{ payload: any}>());