import { WeatherLocation } from 'models';

export interface LocationStore {
  location: WeatherLocation;
  updateLocation: (location: WeatherLocation) => void;
}
