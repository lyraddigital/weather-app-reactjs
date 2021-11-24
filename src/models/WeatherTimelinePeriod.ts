import { WeatherType } from 'core';

export interface WeatherTimelinePeriod {
  weatherType: WeatherType;
  temp: number;
  time: string;
}
