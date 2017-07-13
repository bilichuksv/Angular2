import { Component, OnInit } from '@angular/core';
import {FilmService} from '../film.service'
import { NgForm } from "@angular/forms/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
paymentOk: boolean = false;
months: number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
years: number[] = [2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037];
tel;
sum;
email:string;
card;
  constructor(private router: Router, private filmCardService: FilmService) { }

  ngOnInit() {
  }
onSubmit(form: NgForm){
    console.log(form);
    console.log(this.tel);
    this.paymentOk = true;
    
    
 }
}
