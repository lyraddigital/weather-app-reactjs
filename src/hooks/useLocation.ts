import { useContext } from 'react';

import { LocationContext } from 'core';
import { LocationStore, WeatherLocation } from 'models';

export const useLocation = (): WeatherLocation | undefined => {
  const locationStore = useContext<LocationStore | undefined>(LocationContext);
  return locationStore?.location;
};
