import { useContext } from 'react';

import { LocationStore, WeatherLocation } from 'models';
import { LocationContext } from 'context';

export const useLocation = (): WeatherLocation | undefined => {
  const locationStore = useContext<LocationStore | undefined>(LocationContext);
  return locationStore?.location;
};
