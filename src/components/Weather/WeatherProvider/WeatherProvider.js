import { useEffect, useState } from 'react';
import axios from 'axios';

import { Configuration, WEATHER_API_URL, WeatherContext } from 'core';
import { useLocation } from 'hooks';
import { Loader } from 'components/Loader';

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState();
  const { lat, lon } = useLocation();

  const getWeather = (lat, lon, setWeatherData) => {
    axios
      .get(
        `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${Configuration.apiKey}&units=metric`,
      )
      .then((response) => {
        setWeatherData(response.data);
      });
  };

  useEffect(() => {
    getWeather(lat, lon, setWeatherData);

    const interval = setInterval(() => {
      getWeather(lat, lon, setWeatherData);
    }, Configuration.weatherRefreshRateInMilliseconds);

    return () => {
      clearInterval(interval);
    };
  }, [lat, lon, setWeatherData]);

  const contents = weatherData ? children : null;

  return (
    <WeatherContext.Provider value={weatherData}>
      <Loader isLoading={!weatherData} />
      {contents}
    </WeatherContext.Provider>
  );
};
