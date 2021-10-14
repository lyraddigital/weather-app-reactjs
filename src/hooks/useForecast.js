import { useContext } from "react";

import { WeatherContext } from "../core/WeatherContext";

export const useForecast = () => {
    const { daily } = useContext(WeatherContext);

    if (!daily) {
        return { days: [] };
    }

    return {
        days: daily.slice(1, 6).map(d => ({
            date: d?.dt ? new Date(d.dt * 1000): new Date(),
            weather: d?.weather[0]?.main === 'Sunny' ? 0 : 1,
            lowTemp: Math.round(d?.temp?.min || 0),
            highTemp: Math.round(d?.temp?.max || 0),
            rainPercentage: Math.round(d?.humidity || 0),
            windSpeed: Math.round(d?.wind_speed || 0)
        }))
    };
}