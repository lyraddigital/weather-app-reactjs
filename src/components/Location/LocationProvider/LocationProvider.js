import { useState } from 'react';

import { LocationContext } from 'core';

const getLocationFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('ld-weather-app-location'));
};

const setLocationToLocalStorage = (location) => {
  localStorage.setItem('ld-weather-app-location', JSON.stringify(location));
};

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(getLocationFromLocalStorage());
  const updateLocation = (location) => {
    setLocationToLocalStorage(location);
    setLocation(location);
  };

  return (
    <LocationContext.Provider value={{ updateLocation, location }}>
      {children}
    </LocationContext.Provider>
  );
};
