import { WeatherForecastDay } from 'models';

import { useCurrentWeather } from './useCurrentWeather';

export const useForecast = (): Array<WeatherForecastDay> => {
  const { forecast } = useCurrentWeather();

  if (!forecast) {
    return [];
  }

  return forecast.slice(1, 6);
};
