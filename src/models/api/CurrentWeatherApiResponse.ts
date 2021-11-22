import { CurrentWeatherIdApiResponse } from "./CurrentWeatherIdApiResponse";

export interface CurrentWeatherApiResponse {
    dt: number;
    temp: number;
    wind_speed: number;
    humidity: number;
    sunrise: number;
    sunset: number;
    weather?: Array<CurrentWeatherIdApiResponse>;
}