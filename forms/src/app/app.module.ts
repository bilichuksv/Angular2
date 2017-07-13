import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

	
import {Routes, RouterModule} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmService } from './film.service';
import { FilmListComponent } from './film-list/film-list.component';
import { LoginComponent } from './login/login.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { routes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    FilmListComponent,
    LoginComponent,
    PaymentFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
