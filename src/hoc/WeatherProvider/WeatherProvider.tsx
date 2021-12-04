import React, { PropsWithChildren, useEffect, useState } from 'react';
import axios from 'axios';

import { WeatherApiResponse } from 'models';
import { WeatherContext } from 'context';
import { Configuration, WEATHER_API_URL } from 'core';
import { useLocation } from 'hooks';

import { Redirect } from 'react-router';

export const WeatherProvider = ({
  children,
}: PropsWithChildren<any>): JSX.Element => {
  const [weatherData, setWeatherData] = useState<WeatherApiResponse>();
  const [hasWeatherRequestFailed, setHasWeatherRequestFailed] =
    useState<boolean>(false);
  const location = useLocation();

  const getWeatherFromApi = async (
    lat: number | undefined,
    lon: number | undefined,
    setWeatherData: React.Dispatch<WeatherApiResponse>,
  ) => {
    setHasWeatherRequestFailed(false);
    setWeatherData({ ...weatherData, isLoading: true });

    try {
      const response = await axios.get<WeatherApiResponse>(
        `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${Configuration.apiKey}&units=metric`,
      );

      setWeatherData({ ...response.data, isLoading: false });
    } catch (e) {
      setHasWeatherRequestFailed(true);
      setWeatherData({ ...weatherData, isLoading: false });
    }
  };

  useEffect(() => {
    if (location) {
      const { lat, lon } = location;
      getWeatherFromApi(lat, lon, setWeatherData);

      const interval = setInterval(() => {
        getWeatherFromApi(lat, lon, setWeatherData);
      }, Configuration.weatherRefreshRateInMilliseconds);

      return () => {
        clearInterval(interval);
      };
    }
  }, [location, setWeatherData]);

  if (hasWeatherRequestFailed) {
    return <Redirect to="load-error" />;
  }

  return (
    <WeatherContext.Provider value={weatherData}>
      {children}
    </WeatherContext.Provider>
  );
};
