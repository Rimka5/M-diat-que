import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Film } from 'src/app/models/Film.model'
import { Observable } from 'rxjs';

const apiUrlFilm = environment.API_URL+"/Films"
@Injectable({
  providedIn: 'root'
})
export class FilmHttpService {

  constructor(private httpClient:HttpClient) { }

  findAll(){
    return this.httpClient.get<Film[]>(apiUrlFilm);
  }

  findById(id:number){
    return this.httpClient.get<Film>(`${apiUrlFilm}/${id}`);
  }
  create(film:Film) : Observable<Film>{
    return this.httpClient.post<Film>(apiUrlFilm,film);
  }
  update(film:Film) : Observable<Film>{
    return this.httpClient.put<Film>(apiUrlFilm,film);
  }

  save(film:Film){
    return this.httpClient.post<Film>(apiUrlFilm,film);
  }

  delete(id:number){
    return this.httpClient.delete<Film>(`${apiUrlFilm}/${id}`);
  }
}