import { useContext } from 'react';

import { LocationStore, WeatherLocation } from 'models';
import { LocationContext } from 'context';

export const useLocation = (): WeatherLocation => {
  const locationStore = useContext<LocationStore>(LocationContext);
  return locationStore.location;
};
