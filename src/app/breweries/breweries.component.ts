import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.scss']
})
export class BreweriesComponent implements OnInit {
  // you need this to store the data that you're getting back from the get request
  breweries: Object;

  constructor(private http: HttpService) { }

  ngOnInit() { // anything inside here runs when the component is loaded
    this.http.getBreweries().subscribe(data => {
      this.breweries = data; // this will store the data pulled from the api get request and set it to the breweries object
    });
  }

}
