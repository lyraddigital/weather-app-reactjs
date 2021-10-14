import { useContext } from "react";

import { WeatherContext } from "../core/WeatherContext";

export const useCurrentWeather = () => {
    const weatherData = useContext(WeatherContext);

    return {
        currentTemp: Math.round(weatherData?.current?.temp) || 0,
        weatherType: weatherData?.current?.weather?.length > 0 ? weatherData.current.weather[0].main === 'Clouds' ? 1: 0 : 0,
        statistics: { 
            highTemp: Math.round(weatherData?.daily?.length > 0 ? weatherData.daily[0]?.temp?.max : 0),
            lowTemp: Math.round(weatherData?.daily?.length > 0 ? weatherData.daily[0]?.temp?.min : 0), 
            windSpeed: Math.round(weatherData?.current?.wind_speed) || 0,
            rainPercentage: Math.round(weatherData?.current?.humidity),
            sunriseTime: weatherData?.current?.sunrise ? new Date(weatherData.current.sunrise * 1000): new Date(), 
            sunsetTime: weatherData?.current?.sunset ? new Date(weatherData.current.sunset * 1000): new Date()
        }
    }
}
