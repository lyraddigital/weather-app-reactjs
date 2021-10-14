import { useEffect, useState } from "react";
import axios from 'axios';

import { WeatherContext } from "./WeatherContext";

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=-33.8679&lon=151.2073&appid=63c100967793bce054f43823d77eb8fa&units=metric').then(
            response => {
                setWeatherData(response.data);
                setLoading(false);
            }
        );
    }, [setLoading]);

    const contentsEl = loading ? <div>Loading...</div> : children;

    return (
        <WeatherContext.Provider value={weatherData}>
            { contentsEl }
        </WeatherContext.Provider>
    )
}