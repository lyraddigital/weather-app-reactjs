export interface WeatherApiResponse {
    current?: {
        dt: number;
        temp: number;
        wind_speed: number;
        humidity: number;
        sunrise: number;
        sunset: number;
        weather?: Array<{ id: number }>;
    },
    daily?: Array<{ dt: number, humidity: number, wind_speed: number, weather: Array<{ main: string }>, temp: { max: number; min: number }}>;
    hourly?: Array<{ temp: number; dt: number; }>;
    timezone: string;
}
