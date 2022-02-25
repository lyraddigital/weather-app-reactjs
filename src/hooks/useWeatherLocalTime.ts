import { useCurrentWeather } from './useCurrentWeather';

export const useWeatherLocalTime = (): Date | undefined => {
  const { statistics } = useCurrentWeather();
  return statistics.localTime;
};
