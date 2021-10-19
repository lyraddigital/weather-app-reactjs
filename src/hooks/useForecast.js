import { useCurrentWeather } from "./useCurrentWeather";

export const useForecast = () => {
    const { forecast } = useCurrentWeather();

    if (!forecast) {
        return { forecast: [] };
    }

    return {
        forecast: forecast.slice(1, 6)
    };
}