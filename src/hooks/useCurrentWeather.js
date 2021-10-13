import { useEffect, useState } from "react";
import axios from 'axios';

export const useCurrentWeather = (location) => {
    const [weather, setWeather] = useState();

    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=d8754f9be76fb02a0dab2bf53f160646&units=metric').then(
            response => {
                setWeather(response.data)
                console.log(response); 
            }
        );        
    }, [location])

    return {
        currentTemp: Math.round(weather?.main?.temp) || 0,
        weatherType: weather?.weather?.length > 0 ? weather.weather[0].main === 'Clouds' ? 1: 0 : 0,
        statistics: { 
            highTemp: Math.round(weather?.main?.temp_max) || 0,
            lowTemp: Math.round(weather?.main?.temp_min) || 0, 
            windSpeed: Math.round(weather?.wind?.speed) || 0,
            rainPercentage: Math.round(weather?.main?.humidity),
            sunriseTime: weather?.sys?.sunrise ? new Date(weather.sys.sunrise * 1000): new Date(), 
            sunsetTime: weather?.sys?.sunset ? new Date(weather.sys.sunset * 1000): new Date()
        }
    };
}