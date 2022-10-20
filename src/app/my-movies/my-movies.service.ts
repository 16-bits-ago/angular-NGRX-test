import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

export interface IMovie {
    id: number;
    title: string;
    price: number;
    type: string;
    image: string;
}

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
