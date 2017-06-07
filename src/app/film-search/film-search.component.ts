import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {MdAutocompleteModule} from '@angular/material';

@Component({
  selector: 'film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent {
  stateCtrl: FormControl;
  filteredStates: any;
  value:string;
 

 @Output() filmsChange = new EventEmitter<string>();
    onFilmsChange(filmName){
      console.log(filmName);
      console.log(this.value);
      this.addNewFilmName(filmName);
      this.filmsChange.emit(filmName);
    }

@ViewChild("filmName")
focusInput : ElementRef;

setFocus() {
  this.focusInput.nativeElement.focus();
  this.focusInput.nativeElement.blur();
}

  states = [
    'Alabama',
    'Georgia',
    'Lord',
    'Matrix',
    'Millenium',
    'Star',
    
  ];

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterStates(name));
  }

addNewFilmName(name) {
  if (this.states.indexOf(name)==-1) {
    this.states.push(name); 
  }
}
  filterStates(val: string) {
    return val ? this.states.filter(s => new RegExp(`^${val}`, 'gi').test(s))
               : this.states;
  }


}


