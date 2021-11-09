import { useCurrentWeather } from './useCurrentWeather';

import { WeatherForecastDay } from 'models';

export const useForecast = (): Array<WeatherForecastDay> => {
  const { forecast } = useCurrentWeather();

  if (!forecast) {
    return [];
  }

  return forecast.slice(1, 6);
};
