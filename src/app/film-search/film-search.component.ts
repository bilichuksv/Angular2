import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {

 @Output() filmsChange = new EventEmitter<string>();
    onFilmsChange(filmName){
        console.log(filmName);       
        this.filmsChange.emit(filmName);
    }

  constructor() { }

  ngOnInit() {
  }

}


