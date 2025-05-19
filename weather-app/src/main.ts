import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { WeatherDashboard } from './components/weather-dashboard';

Aurelia
  .register(WeatherDashboard)
  .app(MyApp)
  .start();
