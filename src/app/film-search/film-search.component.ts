import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {
  foc: boolean = false;

 @Output() filmsChange = new EventEmitter<string>();
    onFilmsChange(filmName){
        console.log(filmName);       
        this.filmsChange.emit(filmName);
    }

  constructor() { }

@ViewChild("filmName")
focusInput : ElementRef;

setFocus() {
this.focusInput.nativeElement.focus();
this.focusInput.nativeElement.blur();
}

  ngOnInit() {
  }

}


