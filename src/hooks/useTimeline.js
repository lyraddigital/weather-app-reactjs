import { format, getHours } from "date-fns";
import { useContext } from "react";

import { WeatherContext } from "../core/WeatherContext";

const availableTimes = [0, 3, 6, 9, 12, 15, 18, 21];

export const useTimeline = () => {
    const { hourly } = useContext(WeatherContext);

    if (!hourly) {
        return { periods: [] };
    }

    const hours = hourly.filter(h => availableTimes.includes(getHours(h.dt * 1000))).slice(0, 6);

    return {
        periods: hours.map(h => ({
            weather: 1,
            temp: Math.round(h?.temp || 0),
            time: format(new Date(h.dt * 1000), 'ha')
        }))
    };
    
}