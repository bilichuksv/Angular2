import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');
import {Router} from '@angular/router';
import {FilmService} from '../../services/film.service';

declare var $:any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html',
     
})

export class HomeComponent implements OnInit{
    filmList : Object[] = [];
    filmName : string; 
    isLoading: boolean = false;

    constructor(private router: Router, private filmService: FilmService){}
    goHome(){
         
        this.router.navigate(['typography']);
    }

    ngOnInit() {
    this.filmName = "Lord"
    //this.getFilms();
    
  }

  private getFilms(){
    if(!this.filmName) {return;}
    this.filmService.getFilms(this.filmName).subscribe(data => {
      this.filmList = data;
      console.log(this.filmList);
    })
  }
    
}
