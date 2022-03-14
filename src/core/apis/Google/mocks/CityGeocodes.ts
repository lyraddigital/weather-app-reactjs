import { LocationByAddressResponse } from 'models';

export const cityGeocodes: { [key: string]: LocationByAddressResponse } = {
  Sydney: {
    lat: -33.8688197,
    lon: 151.2092955,
    city: 'Sydney',
    country: 'Australia',
    success: true,
  },
  London: {
    lat: 51.5072178,
    lon: -0.1275862,
    city: 'London',
    country: 'United Kingdom',
    success: true,
  },
  'New York': {
    lat: 40.7127753,
    lon: -74.0059728,
    city: 'New York',
    country: 'United States',
    success: true,
  },
};
