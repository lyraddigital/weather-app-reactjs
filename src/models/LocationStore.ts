import { WeatherLocation } from './WeatherLocation';

export interface LocationStore {
  location?: WeatherLocation;
  updateLocation: (location: WeatherLocation) => void;
}
