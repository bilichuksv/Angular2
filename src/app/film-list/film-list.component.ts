import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {FilmService} from '../film.service'

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  filmList : Object[] = [];
  filmName : string; 
  
  constructor(private filmCardService: FilmService) { }
  view: string;
  selection: string;
   filmsChange(filmName) {
     //console.log(filmName);
     this.filmName = filmName;
     this.getFilms();
   }
 
  ngOnInit() {
    this.filmName = "Lord"
    this.getFilms();
  }

  private getFilms(){
    if(!this.filmName) {return;}
    this.filmCardService.getFilms(this.filmName).subscribe(data => {
      this.filmList = data;
    })
  }

 private getNextPage() {
     this.filmCardService.getFilmsPage().subscribe(data => {
      this.filmList = this.filmList.concat(data);
    })
  }

  onSelected(selectedValue) {
    this.selection = selectedValue;
  }
}
