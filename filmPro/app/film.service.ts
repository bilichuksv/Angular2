import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmService {
  searchUrl: string = "http://www.omdbapi.com/?s=";
  filmUrl: string = "http://www.omdbapi.com/?i=";
  apiKey: string = "&apikey=520bbe17";
  pageSpace: string = "&page=";
  page: number = 1;
  lastFilmsName: string = 'lord';
  
  constructor(private http: Http) { }

  private extractListData(res: Response) {
    let body = res.json();
    return body.Search || {};
  }

  private extractItemData(res: Response) {
    let body = res.json();
    return body || {};
  }

  getFilms (filmName: string) {
    this.page = 1;
    this.lastFilmsName = filmName;
    return this.http.get(this.searchUrl + filmName + this.pageSpace + this.page + this.apiKey).map(this.extractListData);
  }

  getFilmsPage () {
    this.page ++;
    return this.http.get(this.searchUrl + this.lastFilmsName +  this.pageSpace + this.page + this.apiKey).map(this.extractListData);
  }

  getFilmById (filmId: string) {
    return this.http.get(this.filmUrl + filmId +  this.pageSpace + this.page + this.apiKey).map(this.extractItemData);
  }

}
