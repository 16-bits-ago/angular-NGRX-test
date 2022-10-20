import { Component } from "@angular/core";
import { Observable } from "rxjs";
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