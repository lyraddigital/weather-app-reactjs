import { createContext } from 'react';

import { WeatherApiResponse } from 'models';

export const WeatherContext = createContext<WeatherApiResponse | undefined>(
  undefined,
);
