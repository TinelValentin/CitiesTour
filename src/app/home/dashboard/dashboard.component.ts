import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cities:City[];

  constructor(private citiesService:CitiesService) { }

  ngOnInit(): void {
    this.cities = this.citiesService.getCities();
  }

  search(text:string)
  {
    this.cities = this.citiesService.filterCities(text);
  }
}
