import { isCurrentTimeNight } from 'core';

import { useCurrentWeather } from './useCurrentWeather';

export const useCurrentWeatherTheme = () => {
  const { statistics } = useCurrentWeather();

  const isDarkMode = isCurrentTimeNight(
    statistics?.localTime,
    statistics?.sunriseTime,
    statistics?.sunsetTime,
  );

  return { isDarkMode };
};
