import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Redirect } from 'react-router';

import { WeatherApiResponse } from 'models';
import { WeatherContext } from 'context';
import { getConfiguration, getWeatherApiData } from 'core';
import { useLocation } from 'hooks';

export const WeatherProvider = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => {
  const [weatherData, setWeatherData] = useState<
    WeatherApiResponse | undefined
  >();
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [hasWeatherRequestFailed, setHasWeatherRequestFailed] =
    useState<boolean>(false);
  const location = useLocation();

  const getWeatherFromApi = async (
    lat: number | undefined,
    lon: number | undefined,
    setWeatherData: React.Dispatch<WeatherApiResponse | undefined>,
  ) => {
    setHasWeatherRequestFailed(false);
    setIsLoading(true);

    try {
      const weatherApiData = await getWeatherApiData(lat, lon);

      setWeatherData(weatherApiData);
    } catch (e) {
      setHasWeatherRequestFailed(true);
      setWeatherData(undefined);
    } finally {
      setIsLoading(false);
      setIsFirstLoad(false);
    }
  };

  useEffect(() => {
    if (location) {
      const { lat, lon } = location;
      getWeatherFromApi(lat, lon, setWeatherData);

      const interval = setInterval(() => {
        getWeatherFromApi(lat, lon, setWeatherData);
      }, getConfiguration().weatherRefreshRateInMilliseconds);

      return () => {
        clearInterval(interval);
      };
    }
  }, [location, setWeatherData]);

  if (hasWeatherRequestFailed) {
    return <Redirect to="load-error" />;
  }

  return (
    <WeatherContext.Provider
      value={{ data: weatherData, isLoading, isFirstLoad }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
