import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { loadMovies } from "../movie.action";
import { IMovie, MoviesService } from "./my-movies.service";

@Component({
    selector: 'app-my-movies',
    templateUrl: './my-movies.component.html',
  })

  export class MoviesPageComponent {
    movies: IMovie[] = [];
   
    constructor(private movieService: MoviesService) {}
   
    ngOnInit() {
      this.movieService.getAll().subscribe(movies => {this.movies = movies});
    }
  }

  

  /* export class MoviesPageComponent {
    movies$: Observable<IMovie[]>
   
    constructor(private store: Store<{ movies: IMovie[] }>) {
      this.movies$ = store.select('movies')
    }

    listOfMovies() {
      this.store.dispatch(loadMovies())
    }
   
    ngOnInit() {
      this.store.dispatch(loadMovies());
    }
  } */