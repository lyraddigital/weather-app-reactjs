export interface DailyForecastApiResponse {
    dt: number; 
    humidity: number; 
    wind_speed: number;
    weather: Array<{ id: number, main: string }>;
    temp: { max: number; min: number }
}