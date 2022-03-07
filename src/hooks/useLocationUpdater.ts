import { useContext } from 'react';

import { LocationContext } from 'context';
import { WeatherLocation } from 'models';

export const useLocationUpdater = ():
  | ((location: WeatherLocation) => void)
  | undefined => {
  const locationStore = useContext(LocationContext);
  return locationStore?.updateLocation;
};
