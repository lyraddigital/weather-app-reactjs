import { useContext } from 'react';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

import { convertEpochSecondsToDate, roundNumberOrZero } from 'core';
import {
  CurrentWeatherResponse,
  DailyForecastApiResponse,
  TimelinePeriodApiResponse,
  WeatherApiResponse,
} from 'models';
import { WeatherContext } from 'context';

export const useCurrentWeather = (): CurrentWeatherResponse => {
  const weatherData = useContext<WeatherApiResponse | undefined>(
    WeatherContext,
  );
  const timezone = weatherData?.timezone;

  return {
    currentTemp: roundNumberOrZero(weatherData?.current?.temp),
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
      windSpeed: roundNumberOrZero(weatherData?.current?.wind_speed),
      rainPercentage: roundNumberOrZero(weatherData?.current?.humidity),
      sunriseTime: convertEpochSecondsToDate(
        weatherData?.current?.sunrise,
        timezone,
      ),
      sunsetTime: convertEpochSecondsToDate(
        weatherData?.current?.sunset,
        timezone,
      ),
      localTime: convertEpochSecondsToDate(weatherData?.current?.dt, timezone),
    },
    timeline: (weatherData?.hourly || []).map(
      (h: TimelinePeriodApiResponse) => ({
        weatherId: h.weather[0].id,
        temp: roundNumberOrZero(h?.temp),
        time: format(utcToZonedTime(h.dt * 1000, timezone || ''), 'ha'),
      }),
    ),
    forecast: (weatherData?.daily || []).map((d: DailyForecastApiResponse) => ({
      date: convertEpochSecondsToDate(d?.dt, timezone),
      weatherId: d?.weather[0]?.id || 0,
      lowTemp: roundNumberOrZero(d?.temp?.min),
      highTemp: roundNumberOrZero(d?.temp?.max),
      rainPercentage: roundNumberOrZero(d?.humidity),
      windSpeed: roundNumberOrZero(d?.wind_speed),
    })),
  };
};
