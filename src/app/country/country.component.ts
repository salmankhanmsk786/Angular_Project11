import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Country } from './country';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule


@Component({
  selector: 'app-country',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'] // Corrected property name
})
export class CountryComponent implements OnInit{

  public countries: Country[] = [];

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.getCountry()
  }
  getCountry() {
    this.http.get<Country[]>(`${environment.baseUrl}api/Countries`).subscribe( // Corrected URL
      {
        next: result => this.countries = result,
        error: e => console.error(e)
      }
    )
  }
}