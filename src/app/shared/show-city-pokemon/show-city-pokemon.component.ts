import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons/pokemons.service';
import { WeatherService } from '../../services/weather/weather.service';


@Component({
  selector: 'app-show-city-pokemon',
  templateUrl: './show-city-pokemon.component.html',
  styleUrls: ['./show-city-pokemon.component.scss']
})
export class ShowCityPokemonComponent implements OnInit {
  weatherData: any;
  cityName: string = 'Fortaleza';
  private setAllPokemons: any
  getAllPokemons: any;
  loading: boolean = true;

  constructor(
    private pokemonsService: PokemonsService,
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getWeatherData(this.cityName);
    this.cityName = '';

    this.getPokemondata();
  }

  private getPokemondata() {
    this.loading = true;
    this.pokemonsService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;

        console.log("getAllPokemons:",this.getAllPokemons);

        this.getAllPokemons = this.setAllPokemons.find((e: any) => {
          return e.name;
        });
        this.loading = true;
      }
    );
  }

  private getWeatherData(cityName: string) {
    this.loading = true;
    this.weatherService.getWeatherData(cityName).subscribe(res => {
      this.weatherData = res;
      this.loading = false;
    })
  }

  getSearch(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
}
