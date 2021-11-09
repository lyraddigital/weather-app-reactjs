import { useContext } from 'react';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

import { WeatherContext } from 'core';
import { CurrentWeatherResponse } from 'models';

export const useCurrentWeather = (): CurrentWeatherResponse => {
  const weatherData = useContext<any>(WeatherContext);

  return {
    currentTemp: Math.round(weatherData?.current?.temp) || 0,
    weatherType:
      weatherData?.current?.weather?.length > 0
        ? weatherData.current.weather[0].main === 'Clouds'
          ? 1
          : 0
        : 0,
    statistics: {
      highTemp: Math.round(
        weatherData?.daily?.length > 0 ? weatherData.daily[0]?.temp?.max : 0,
      ),
      lowTemp: Math.round(
        weatherData?.daily?.length > 0 ? weatherData.daily[0]?.temp?.min : 0,
      ),
      windSpeed: Math.round(weatherData?.current?.wind_speed) || 0,
      rainPercentage: Math.round(weatherData?.current?.humidity),
      sunriseTime: weatherData?.current?.sunrise
        ? utcToZonedTime(
            weatherData.current.sunrise * 1000,
            weatherData.timezone,
          )
        : new Date(),
      sunsetTime: weatherData?.current?.sunset
        ? utcToZonedTime(
            weatherData.current.sunset * 1000,
            weatherData.timezone,
          )
        : new Date(),
      localTime: weatherData?.current?.dt
        ? utcToZonedTime(weatherData.current.dt * 1000, weatherData.timezone)
        : new Date(),
    },
    timeline: weatherData.hourly.map((h: any) => ({
      weather: 1,
      temp: Math.round(h?.temp || 0),
      time: format(utcToZonedTime(h.dt * 1000, weatherData.timezone), 'ha'),
    })),
    forecast: weatherData.daily.map((d: any) => ({
      date: d?.dt
        ? utcToZonedTime(d.dt * 1000, weatherData.timezone)
        : new Date(),
      weather: d?.weather[0]?.main === 'Sunny' ? 0 : 1,
      lowTemp: Math.round(d?.temp?.min || 0),
      highTemp: Math.round(d?.temp?.max || 0),
      rainPercentage: Math.round(d?.humidity || 0),
      windSpeed: Math.round(d?.wind_speed || 0),
    })),
  };
};
