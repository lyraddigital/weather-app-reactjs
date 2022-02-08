import { WeatherApiResponse } from './api';

export interface WeatherState {
  data?: WeatherApiResponse;
  isLoading: boolean;
  isFirstLoad: boolean;
}
