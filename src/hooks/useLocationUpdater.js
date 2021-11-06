import { useContext } from 'react';

import { LocationContext } from 'core';

export const useLocationUpdater = () => {
  const { updateLocation } = useContext(LocationContext);
  return updateLocation;
};
