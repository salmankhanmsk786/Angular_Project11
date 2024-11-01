import { Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { CountryComponent } from './country/country.component';
import { WeatherComponent } from './weather/weather.component';
import { CountryPopulationComponent } from './country/country-population.component';
// Removed the empty import statement

export const routes: Routes = [
     {path: 'countries', component: CountryComponent},
     {path: 'cities', component: CityComponent},
     {path: 'countrypopulation/:Id', component: CountryPopulationComponent},
     {path: '', component: WeatherComponent, pathMatch: 'full'},
     

];