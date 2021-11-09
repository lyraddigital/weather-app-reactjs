import { PropsWithChildren, useEffect, useState } from 'react';
import axios from 'axios';

import { Configuration, WEATHER_API_URL, WeatherContext } from 'core';
import { useLocation } from 'hooks';

import { Loader } from 'components/Loader';

export const WeatherProvider = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => {
  const [weatherData, setWeatherData] = useState<any>();
  const location = useLocation();

  const getWeather = (lat: number, lon: number, setWeatherData: any) => {
    axios
      .get(
        `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${Configuration.apiKey}&units=metric`,
      )
      .then((response) => {
        setWeatherData(response.data);
      });
  };

  useEffect(() => {
    if (location) {
      const { lat, lon } = location;
      getWeather(lat, lon, setWeatherData);

      const interval = setInterval(() => {
        getWeather(lat, lon, setWeatherData);
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
