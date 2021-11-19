import { PropsWithChildren, useState } from 'react';

import { WeatherLocation } from 'models';
import {
  Configuration,
  getFromLocalStorage,
  LocationContext,
  setToLocalStorage,
} from 'core';

export const LocationProvider = ({
  children,
}: PropsWithChildren<any>): JSX.Element => {
  const [location, setLocation] = useState<WeatherLocation>(
    getFromLocalStorage<WeatherLocation>(
      Configuration.weatherLocationStorageKey,
    ),
  );

  const updateLocation = (location: WeatherLocation): void => {
    setToLocalStorage(Configuration.weatherLocationStorageKey, location);
    setLocation(location);
  };

  return (
    <LocationContext.Provider value={{ updateLocation, location }}>
      {children}
    </LocationContext.Provider>
  );
};
