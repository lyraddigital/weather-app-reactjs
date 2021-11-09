import { PropsWithChildren, useState } from 'react';

import { WeatherLocation } from 'models';
import { LocationContext } from 'core';

const getLocationFromLocalStorage: () => WeatherLocation = () => {
  return JSON.parse(
    window.localStorage.getItem('ld-weather-app-location') || '',
  );
};

const setLocationToLocalStorage = (location: WeatherLocation): void => {
  localStorage.setItem('ld-weather-app-location', JSON.stringify(location));
};

export const LocationProvider = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => {
  const [location, setLocation] = useState<WeatherLocation>(
    getLocationFromLocalStorage(),
  );
  const updateLocation = (location: WeatherLocation): void => {
    setLocationToLocalStorage(location);
    setLocation(location);
  };

  return (
    <LocationContext.Provider value={{ updateLocation, location }}>
      {children}
    </LocationContext.Provider>
  );
};
