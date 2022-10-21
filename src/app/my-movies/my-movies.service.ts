import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { IMovie } from '../statesTypes/movie.type';



@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  constructor(private http: HttpClient) {}

  API_URL = 'http://localhost:3000/movies'

  getAll() {
    return this.http.get<IMovie[]>(this.API_URL)
  }
}
