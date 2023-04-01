import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  @Input() cities:City[];

  constructor(private citiesService : CitiesService, private router: Router) { }

  ngOnInit(): void {
  }


  citySelected(city:City)
  {
    this.citiesService.selectCity(city);
    this.router.navigate(['/']);
  }

}
