import { Component, OnInit, Input } from '@angular/core';
import {FilmService} from '../film.service'
import {MdGridListModule} from '@angular/material';

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent {
  @Input() filmId: string; 
  @Input() view: string;
  filmItem: {} = {};
  constructor(private filmCardService: FilmService) { }

ngOnChanges(){
  console.log(this.view);
}  

  ngOnInit() {
    if(!this.filmId) {return;}
    this.filmCardService.getFilmById(this.filmId).subscribe(data => {
      this.filmItem = data;
      //console.log(data);
        console.log("data received");
    })
  }

  
}

