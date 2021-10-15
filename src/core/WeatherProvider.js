import { useEffect, useState } from "react";
import axios from 'axios';

import { WEATHER_API_URL } from './Contants';
import { Configuration } from "./Configuration";
import { WeatherContext } from "./WeatherContext";
import { LocationContext } from "./LocationContext";

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState();
    const [loading, setLoading] = useState(true);
    const [coords, setCoords] = useState({ lat: -33.8679, lon: 151.2073 });

    useEffect(() => {
        const { lat, lon } = coords;

        axios.get(`${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${Configuration.apiKey}&units=metric`).then(
            response => {
                setWeatherData(response.data);
                setLoading(false);
            }
        );
    }, [coords, setLoading, setWeatherData]);

    const contentsEl = loading ? <div>Loading...</div> : children;

    return (
        <WeatherContext.Provider value={weatherData}>
            <LocationContext.Provider value={ { updateLocation: setCoords } }>
                { contentsEl }
            </LocationContext.Provider>
        </WeatherContext.Provider>
    )
}
