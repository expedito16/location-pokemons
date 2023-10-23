import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = `https://api.openweathermap.org/data/2.5/weather?appid=811070a024b24dfe5766c5755edf121c`;

  constructor(
    private http: HttpClient
  ) { }

  getWeatherData(cityName: string): Observable<any> {
    return this.http.get(this.url, {
      headers: new HttpHeaders(),
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('pt', 'br')
      .set('mode', 'json')
    });
  }
}
