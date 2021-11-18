import { useContext } from 'react';

import { LocationContext } from 'core';
import { LocationStore, WeatherLocation } from 'models';

export const useLocation = (): WeatherLocation => {
  const locationStore = useContext<LocationStore>(LocationContext);
  return locationStore.location;
};
