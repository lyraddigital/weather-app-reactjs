import { format } from "date-fns";
import { useContext } from "react";

import { WeatherContext } from "../core/WeatherContext";

const availableTimesFn = (_, i) => i % 3 === 0;

export const useTimeline = () => {
    const { hourly } = useContext(WeatherContext);

    if (!hourly) {
        return { periods: [] };
    }

    const hours = hourly.filter(availableTimesFn).slice(1, 7);

    return {
        periods: hours.map(h => ({
            weather: 1,
            temp: Math.round(h?.temp || 0),
            time: format(new Date(h.dt * 1000), 'ha')
        }))
    };
    
}