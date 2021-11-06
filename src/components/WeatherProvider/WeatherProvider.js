import { useEffect, useState } from "react";
import axios from 'axios';

import { WEATHER_API_URL } from '../../core/Contants';
import { Configuration } from "../../core/Configuration";
import { WeatherContext } from "../../core/WeatherContext";
import { useLocation } from "../../hooks/useLocation";

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState();
    const [loading, setLoading] = useState(true);
    const { lat, lon } = useLocation();

    const getWeather = (lat, lon, setLoading, setWeatherData) => {
        setLoading(true);

        axios.get(`${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${Configuration.apiKey}&units=metric`).then(
            response => {
                setWeatherData(response.data);
                setLoading(false);
            }
        );
    }

    useEffect(() => {
        getWeather(lat, lon, setLoading, setWeatherData);

        const interval = setInterval(() => {
            getWeather(lat, lon, setLoading, setWeatherData);
        }, 60000);
        
        return () => { clearInterval(interval); }
    }, [lat, lon, setLoading, setWeatherData]);

    const contentsEl = loading ? <div>Loading...</div> : children;

    return (
        <WeatherContext.Provider value={weatherData}>
            { contentsEl }
        </WeatherContext.Provider>
    );
}
