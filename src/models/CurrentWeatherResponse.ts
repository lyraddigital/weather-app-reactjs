import { WeatherForecastDay } from 'models';
import { WeatherStatistics } from './WeatherStatistics';
import { WeatherTimelinePeriod } from './WeatherTimelinePeriod';

export interface CurrentWeatherResponse {
  currentTemp: number;
  weatherId: number;
  statistics: WeatherStatistics;
  timeline: Array<WeatherTimelinePeriod>;
  forecast: Array<WeatherForecastDay>;
  isLoading: boolean;
  isDarkMode: boolean;
}
