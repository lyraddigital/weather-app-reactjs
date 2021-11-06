import { useCurrentWeather } from './useCurrentWeather';

export const useWeatherLocalTime = () => {
  const { statistics } = useCurrentWeather();
  return statistics.localTime;
};
