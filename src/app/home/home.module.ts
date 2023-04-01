import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CityCardComponent } from './city-card/city-card.component';
import { HomeRoutingModule } from './home-routing.module';
import { InfoComponent } from './info/info.component';
import { PopularComponent } from './popular/popular.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    SearchBarComponent,
    CityCardComponent,
    InfoComponent,
    PopularComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
