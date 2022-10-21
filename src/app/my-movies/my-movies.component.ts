import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { ShowAllMovies } from '../movie.action'
import { getMovies, getMsg } from '../movie.reducer'
import { IMovie, MovieState } from '../statesTypes/movie.type'

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html'
})
export class MoviesPageComponent {
  movies$: Observable<IMovie[]>
  msg$: Observable<any>

  constructor(private store: Store<MovieState>) {
    this.movies$ = store.select(getMovies)
    this.msg$ = store.select(getMsg)
  }

  loadAllArticles(){
		this.store.dispatch(ShowAllMovies());
	}

  ngOnInit() {
    this.store.dispatch(ShowAllMovies());
  }
}