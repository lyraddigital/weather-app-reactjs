import { WeatherTimelinePeriod } from 'models';

import { useCurrentWeather } from './useCurrentWeather';

export const useTimeline = (): Array<WeatherTimelinePeriod> => {
  const { timeline } = useCurrentWeather();

  if (!timeline) {
    return [];
  }

  return timeline
    .filter((_: WeatherTimelinePeriod, i: number) => i % 3 === 0)
    .slice(1, 7);
};
