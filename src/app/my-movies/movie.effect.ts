import { increment } from './../counter.action';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, debounceTime } from 'rxjs/operators';
import { MoviesService } from './my-movies.service';
import { ShowAllMoviesFailedAction, ShowAllMovies, ShowAllMoviesSuccessAction } from '../movie.action';
 
@Injectable()
export class MovieEffects {
 
  loadAllMovies$ = createEffect(() => this.actions$.pipe(
    ofType(ShowAllMovies),
    debounceTime(2000),
    mergeMap(() => this.moviesService.getAll()
      .pipe(
        map(movies => ShowAllMoviesSuccessAction({ payload: movies })),
        catchError(error => of(ShowAllMoviesFailedAction({payload: error})))
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}