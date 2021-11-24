import React, { PropsWithChildren, useEffect, useState } from 'react';
import axios from 'axios';

import { WeatherApiResponse } from 'models';
import { WeatherContext } from 'context';
import { Configuration, WEATHER_API_URL } from 'core';
import { useLocation } from 'hooks';

import { Loader } from 'components/Loader';

export const WeatherProvider = ({
  children,
}: PropsWithChildren<any>): JSX.Element => {
  const [weatherData, setWeatherData] = useState<WeatherApiResponse>();
  const location = useLocation();

  const getWeatherFromApi = (
    lat: number,
    lon: number,
    setWeatherData: React.Dispatch<WeatherApiResponse>,
  ) => {
    axios
      .get<WeatherApiResponse>(
        `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${Configuration.apiKey}&units=metric`,
      )
      .then((response) => {
        setWeatherData(response.data);
      });
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

  const contents = weatherData ? children : null;

  return (
    <WeatherContext.Provider value={weatherData}>
      <Loader isLoading={!weatherData} />
      {contents}
    </WeatherContext.Provider>
  );
};
