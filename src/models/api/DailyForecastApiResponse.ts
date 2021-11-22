export interface DailyForecastApiResponse {
    dt: number; 
    humidity: number; 
    wind_speed: number;
    weather: Array<{ main: string }>;
    temp: { max: number; min: number }
}