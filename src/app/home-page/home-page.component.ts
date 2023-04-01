import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { City } from '../models/city';
import { CitiesService } from '../services/cities.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  selectedCity: string;
  selectedCityImage: string = "/assets/backgroundImage.jpg";
  constructor(private citiesService: CitiesService) {

  }

  ngOnInit(): void {
    if (this.citiesService.selectedCity!!) {
      this.selectedCity = this.citiesService.selectedCity.name;
      this.selectedCityImage = this.citiesService.selectedCity.image;
    }

  }


}
