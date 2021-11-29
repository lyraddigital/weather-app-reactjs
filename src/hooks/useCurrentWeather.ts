import { useContext } from 'react';

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

  const timezone = weatherData?.timezone || ''; // UTC time will be used if not set
  const currentDetails = weatherData?.current;
  const weatherId =
    currentDetails?.weather && currentDetails.weather.length > 0
      ? currentDetails.weather[0].id
      : 0;
  const dailyTemperatures =
    weatherData?.daily && weatherData.daily.length > 0
      ? weatherData.daily[0]?.temp
      : undefined;

  return {
    currentTemp: roundNumberOrZero(currentDetails?.temp),
    weatherId,
    statistics: {
      highTemp: roundNumberOrZero(dailyTemperatures?.max),
      lowTemp: roundNumberOrZero(dailyTemperatures?.min),
      windSpeed: roundNumberOrZero(currentDetails?.wind_speed),
      rainPercentage: roundNumberOrZero(currentDetails?.humidity),
      sunriseTime: convertEpochSecondsToDate(currentDetails?.sunrise, timezone),
      sunsetTime: convertEpochSecondsToDate(currentDetails?.sunset, timezone),
      localTime: convertEpochSecondsToDate(currentDetails?.dt, timezone),
    },
    timeline: (weatherData?.hourly || []).map(
      (h?: TimelinePeriodApiResponse) => ({
        weatherId:
          h?.weather && h.weather.length > 0 ? h.weather[0]?.id || 0 : 0,
        temp: roundNumberOrZero(h?.temp),
        time: convertEpochSecondsToDate(h?.dt, timezone),
      }),
    ),
    forecast: (weatherData?.daily || []).map(
      (d?: DailyForecastApiResponse) => ({
        date: convertEpochSecondsToDate(d?.dt, timezone),
        weatherId:
          d?.weather && d.weather.length > 0 ? d.weather[0]?.id || 0 : 0,
        lowTemp: roundNumberOrZero(d?.temp?.min),
        highTemp: roundNumberOrZero(d?.temp?.max),
        rainPercentage: roundNumberOrZero(d?.humidity),
        windSpeed: roundNumberOrZero(d?.wind_speed),
      }),
    ),
  };
};
