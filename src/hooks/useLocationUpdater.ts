import { useContext } from 'react';

import { LocationContext } from 'context';

export const useLocationUpdater = () => {
  const locationStore = useContext(LocationContext);
  return locationStore?.updateLocation;
};
