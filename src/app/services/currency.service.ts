import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { CurrencyConvert } from '../interfaces/currency-convert';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  get(): Observable<CurrencyConvert[]>{
    return this.http.get<CurrencyConvert[]>('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL')
   }
}
