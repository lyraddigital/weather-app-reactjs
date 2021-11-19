import { createContext } from 'react';

import { LocationStore } from 'models';

export const LocationContext = createContext<LocationStore>({
  location: { lat: 0, lon: 0, city: '', country: '' },
  updateLocation: () => {},
});
