import { CurrentWeatherApiResponse } from './CurrentWeatherApiResponse';
import { DailyForecastApiResponse } from './DailyForecastApiResponse';
import { TimelinePeriodApiResponse } from './TimelinePeriodApiResponse';

export interface WeatherApiResponse {
  current?: CurrentWeatherApiResponse;
  daily?: Array<DailyForecastApiResponse | undefined>;
  hourly?: Array<TimelinePeriodApiResponse | undefined>;
  timezone?: string;
}
