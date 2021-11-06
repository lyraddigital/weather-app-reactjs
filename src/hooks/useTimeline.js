import { useCurrentWeather } from './useCurrentWeather';

const availableTimesFn = (_, i) => i % 3 === 0;

export const useTimeline = () => {
  const { timeline } = useCurrentWeather();

  if (!timeline) {
    return { periods: [] };
  }

  return {
    periods: timeline.filter(availableTimesFn).slice(1, 7),
  };
};
