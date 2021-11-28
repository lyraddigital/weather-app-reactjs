import { DailyForecastMinMaxApiResponse } from './DailyForecastMinMaxApiResponse';
import { WeatherDetailsApiResponse } from './WeatherDetailsApiResponse';

export interface DailyForecastApiResponse {
  dt?: number;
  humidity?: number;
  wind_speed?: number;
  weather?: Array<WeatherDetailsApiResponse>;
  temp?: DailyForecastMinMaxApiResponse;
}
