import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = 'https://api.openbrewerydb.org/breweries';

  constructor(private http: HttpClient) { }

  getBreweries() {
    return this.http.get(this.url);
  }
}
