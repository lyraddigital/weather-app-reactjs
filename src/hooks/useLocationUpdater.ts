import { useContext } from 'react';

import { LocationContext } from 'core';

export const useLocationUpdater = () => {
  const locationStore = useContext(LocationContext);
  return locationStore?.updateLocation;
};
