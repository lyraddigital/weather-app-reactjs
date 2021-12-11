import React, { PropsWithChildren, useEffect, useState } from 'react';

import { WeatherApiResponse } from 'models';
import { WeatherContext } from 'context';
import { Configuration } from 'core';
import { useLocation } from 'hooks';

import { Redirect } from 'react-router';

import { getWeatherApiData } from 'core/apis/Weather';

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
      const weatherApiData = await getWeatherApiData(lat, lon);

      setWeatherData({ ...weatherApiData, isLoading: false });
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
