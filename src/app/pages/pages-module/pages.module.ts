import { BrowserModule } from '@angular/platform-browser';
import { CalendarComponent } from './../calendar/calendar.component';
import { AppRoutingModule } from './../../app-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { CurrencyConvertComponent } from '../currency-convert/currency-convert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HomeComponent,
    CurrencyConvertComponent,
    CalendarComponent,

  ],
  exports: [
    HomeComponent,
    CurrencyConvertComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class PagesModule { }
