import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountryPopulation } from './CountryPopulation';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-country-population',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './country-population.component.html',
  styleUrl: './country-population.component.scss'
})
export class CountryPopulationComponent implements OnInit {

  Id : number = -1;
  public CountryPopulation!: CountryPopulation;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    let IdParam = this.activatedRoute.snapshot.paramMap.get('Id');
    this.Id = IdParam ? + IdParam : -1; 

  }

  getCountryPopulation() {
    this.http.get<CountryPopulation>(`${environment.baseUrl}api/Countries/countrypopulation/${this.Id}`).subscribe(
      {
        next: result => this.CountryPopulation = result,
        error: e => console.error(e)
      }
    )
  }



}
