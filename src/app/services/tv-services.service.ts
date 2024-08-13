import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvServicesService {
  apiKey:string = "77c08f1be688531589cf2a907a14653c";
  constructor(private http:HttpClient) { }

  getAllTV(pageNumber: number = 1): Observable<any> {
    return this.http.get<any>(
      `http://localhost:3003/movie/allMovies?page=${pageNumber}`
    );
  }

  getTVById(TvId: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:3003/movie/movies/${TvId}`
    );
  }
}
