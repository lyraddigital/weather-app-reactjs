import { useContext } from 'react';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

import { convertEpochSecondsToDate } from 'core';
import { CurrentWeatherResponse, DailyForecastApiResponse, WeatherApiResponse } from 'models';
import { WeatherContext } from 'context';

export const useCurrentWeather = (): CurrentWeatherResponse => {
  const weatherData = useContext<WeatherApiResponse | undefined>(
    WeatherContext,
  );

  return {
    currentTemp: Math.round(weatherData?.current?.temp || 0),
    weatherId: weatherData?.current?.weather
      ? weatherData.current.weather[0].id
      : 0,
    statistics: {
      highTemp: Math.round(
        weatherData?.daily ? weatherData.daily[0]?.temp?.max : 0,
      ),
      lowTemp: Math.round(
        weatherData?.daily ? weatherData.daily[0].temp.min : 0,
      ),
      windSpeed: Math.round(weatherData?.current?.wind_speed || 0),
      rainPercentage: Math.round(weatherData?.current?.humidity || 0),
      sunriseTime: convertEpochSecondsToDate(weatherData?.current?.sunrise, weatherData?.timezone),
      sunsetTime: convertEpochSecondsToDate(weatherData?.current?.sunset, weatherData?.timezone),
      localTime: convertEpochSecondsToDate(weatherData?.current?.dt, weatherData?.timezone),
    },
    timeline: (weatherData?.hourly || []).map(
      (h: { temp: number; dt: number, weather: Array<{id: number}> }) => ({
        weatherId: h.weather[0].id,
        temp: Math.round(h?.temp || 0),
        time: format(
          utcToZonedTime(h.dt * 1000, weatherData?.timezone || ''),
          'ha',
        ),
      }),
    ),
    forecast: (weatherData?.daily || []).map(
      (d: DailyForecastApiResponse) => ({
        date: convertEpochSecondsToDate(d?.dt, weatherData?.timezone),
        weatherId: d?.weather[0]?.id || 0,
        lowTemp: Math.round(d?.temp?.min || 0),
        highTemp: Math.round(d?.temp?.max || 0),
        rainPercentage: Math.round(d?.humidity || 0),
        windSpeed: Math.round(d?.wind_speed || 0),
      }),
    ),
  };
};
