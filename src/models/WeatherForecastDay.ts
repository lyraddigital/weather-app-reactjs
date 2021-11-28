export interface WeatherForecastDay {
  date: Date | undefined;
  weatherId: number;
  lowTemp: number;
  highTemp: number;
  rainPercentage: number;
  windSpeed: number;
}
