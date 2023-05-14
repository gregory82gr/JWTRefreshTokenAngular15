import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environment';



@Component({
  selector: 'app-weather-forecasts',
  templateUrl: './weather-forecasts.component.html',
  styleUrls: ['./weather-forecasts.component.css']
})
export class WeatherForecastsComponent implements OnInit{

  public weatherForecasts!: WeatherForecast[] ;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(environment.baseUrl + "WeatherForecast", {
    }).subscribe({
      next: (response) => {
        this.weatherForecasts = response as WeatherForecast[];
      },
      error: (err) => {
        console.error(err)
      },
      complete: () => console.info('WeatherForecast complete')
    });
  }

}

export interface WeatherForecast {
        date :Date;
        temperatureC:number;
        temperatureF : number;
        summary:string ;
}
