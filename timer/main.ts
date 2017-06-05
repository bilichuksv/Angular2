import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {MaterialModule} from '@angular/material';
import {ProductCard} from './product-card';

@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],

  declarations: [ProductCard],
  bootstrap: [ProductCard],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

