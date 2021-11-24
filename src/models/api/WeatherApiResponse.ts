import { CurrentWeatherApiResponse } from "./CurrentWeatherApiResponse";
import { DailyForecastApiResponse } from "./DailyForecastApiResponse";

export interface WeatherApiResponse {
    current?: CurrentWeatherApiResponse,
    daily?: Array<DailyForecastApiResponse>;
    hourly?: Array<{ temp: number; dt: number; weather: Array<{id: number}> }>;
    timezone: string;
}
