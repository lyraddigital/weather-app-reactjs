import { createContext } from 'react';

import { LocationStore } from 'models';

export const LocationContext = createContext<LocationStore | undefined>(
  undefined,
);
