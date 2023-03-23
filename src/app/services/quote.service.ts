import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../Models/quote.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(public http: HttpClient) { }

  public getRandomQuote(){
    return this.http.get('https://api.quotable.io/random');
  }
}
