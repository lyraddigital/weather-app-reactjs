import { createContext } from 'react';

import { WeatherState } from 'models';

export const WeatherContext = createContext<WeatherState>({
  isLoading: true,
  isFirstLoad: true,
});
