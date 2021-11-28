import { WeatherDetailsApiResponse } from './WeatherDetailsApiResponse';

export interface TimelinePeriodApiResponse {
  temp?: number;
  dt?: number;
  weather?: Array<WeatherDetailsApiResponse>;
}
