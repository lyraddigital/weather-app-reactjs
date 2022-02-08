import { useContext } from 'react';

import { WeatherState } from 'models';
import { WeatherContext } from 'context';

export const useWeatherLoading = (): {
  isLoading: boolean;
  isFirstLoad: boolean;
} => {
  const { isLoading, isFirstLoad } = useContext<WeatherState>(WeatherContext);

  return { isLoading, isFirstLoad };
};
