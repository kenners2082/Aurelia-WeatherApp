import { customElement, inject } from 'aurelia';
import { WeatherService } from '../services/weather-service';
import template from './weather-dashboard.html';

@customElement({
    name: 'weather-dashboard',
    template
})
@inject(WeatherService)

export class WeatherDashboard {
    public city = '';
    public result: string | null = null;
    public weatherData: any = null;

  constructor(private weatherService: WeatherService) {}

  async attached() {
    await this.fetchWeather();
  }

  async fetchWeather() {
    this.result = 'Loading...';
    try {
      const res = await fetch(`http://localhost:3001/api/weather?city=${encodeURIComponent(this.city)}`);
      this.weatherData = await res.json();
      this.result = JSON.stringify(this.weatherData, null, 2);
    } catch (err) {
      this.result = 'Error fetching weather data';
      this.weatherData = null;
    }
  }

  async search() {
    await this.fetchWeather();
  }
}