import { Component, OnInit } from '@angular/core';
import {FilmService} from '../film.service'
import { NgForm } from "@angular/forms/forms";
import {Router} from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private filmCardService: FilmService) { }

  ngOnInit() {
  }
 onSubmit(form: NgForm){
    //console.log(form);
    //this.router.navigate(['/payment-form']);
 }
}
