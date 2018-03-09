import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';


// Adicionar o modulo HTTP
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
