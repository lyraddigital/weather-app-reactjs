import { CurrentWeatherApiResponse } from "./CurrentWeatherApiResponse";
import { DailyForecastApiResponse } from "./DailyForecastApiResponse";
import { TimelinePeriodApiResponse } from "./TimelinePeriodApiResponse";

export interface WeatherApiResponse {
    current?: CurrentWeatherApiResponse,
    daily?: Array<DailyForecastApiResponse>;
    hourly?: Array<TimelinePeriodApiResponse>;
    timezone: string;
}
