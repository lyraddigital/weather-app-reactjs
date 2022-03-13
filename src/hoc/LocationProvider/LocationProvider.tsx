import { PropsWithChildren, useState } from 'react';

import { WeatherLocation } from 'models';
import { LocationContext } from 'context';
import { getConfiguration, getFromLocalStorage, setToLocalStorage } from 'core';

export const LocationProvider = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => {
  const [location, setLocation] = useState<WeatherLocation | undefined>(
    getFromLocalStorage<WeatherLocation>(
      getConfiguration().weatherLocationStorageKey,
    ),
  );

  const updateLocation = (location: WeatherLocation): void => {
    setToLocalStorage(getConfiguration().weatherLocationStorageKey, location);
    setLocation(location);
  };

  return (
    <LocationContext.Provider value={{ updateLocation, location }}>
      {children}
    </LocationContext.Provider>
  );
};
