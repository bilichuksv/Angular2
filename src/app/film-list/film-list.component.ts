import { Component, OnInit, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FilmService } from '../film.service'
import { FilmSearchComponent } from "app/film-search/film-search.component";

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  filmList : Object[] = [];
  filmName : string; 
  isLoading: boolean = false;
  
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

@ViewChild (FilmSearchComponent)
private inputEl : FilmSearchComponent;
  goTop () {
    this.inputEl.setFocus();
  }

showLoading(status) {
  this.isLoading = status;
}
 private getNextPage() {
  this.showLoading(true);
     this.filmCardService.getFilmsPage().subscribe(data => {
      this.filmList = this.filmList.concat(data);
      this.showLoading(false);
    })
  }

    onSelected(selectedValue) {
    this.selection = selectedValue;
  }
}
