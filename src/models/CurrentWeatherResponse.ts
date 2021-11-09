import { WeatherForecastDay } from 'models';
import { WeatherStatistics } from './WeatherStatistics';
import { WeatherTimelinePeriod } from './WeatherTimelinePeriod';

export interface CurrentWeatherResponse {
  currentTemp: number;
  weatherType: number;
  statistics: WeatherStatistics;
  timeline: Array<WeatherTimelinePeriod>;
  forecast: Array<WeatherForecastDay>;
}
