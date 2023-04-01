import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  selectedCity: City;

  cities: City[] = [
    {
      name: "Tokyo",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae earum, cumque praesentium numquam magni temporibus, a minima tempora suscipit rerum assumenda vitae consectetur. Voluptatum at recusandae minus veniam incidunt molestiae?",
      image: "./assets/tokyo.jpg"
    },
    {
      name: "Sukhumvit Road",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae earum, cumque praesentium numquam magni temporibus, a minima tempora suscipit rerum assumenda vitae consectetur. Voluptatum at recusandae minus veniam incidunt molestiae?",
      image: "./assets/SukhumvitRoad.jpg"
    },
    {
      name: "London",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae earum, cumque praesentium numquam magni temporibus, a minima tempora suscipit rerum assumenda vitae consectetur. Voluptatum at recusandae minus veniam incidunt molestiae?",
      image: "./assets/London.jpg"
    }, {
      name: "Madagascar",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae earum, cumque praesentium numquam magni temporibus, a minima tempora suscipit rerum assumenda vitae consectetur. Voluptatum at recusandae minus veniam incidunt molestiae?",
      image: "./assets/Madagascar.jpg"
    }, {
      name: "Northern Beaches",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae earum, cumque praesentium numquam magni temporibus, a minima tempora suscipit rerum assumenda vitae consectetur. Voluptatum at recusandae minus veniam incidunt molestiae?",
      image: "./assets/NorthernBeaches.jpg"
    }, {
      name: "Portage",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae earum, cumque praesentium numquam magni temporibus, a minima tempora suscipit rerum assumenda vitae consectetur. Voluptatum at recusandae minus veniam incidunt molestiae?",
      image: "./assets/Portage.jpg"
    },
  ];
  constructor() { }

  getCities() {
    return this.cities;
  }

  selectCity(city: City) {
    this.selectedCity = city;
  }

  filterCities(text: string) {
    if (text == undefined) {
      return this.cities;
    }

    var cities = this.cities.filter((city) => {
      return city.name.toLowerCase().includes(text.toLowerCase())
    });
    
    return cities
  }
}
