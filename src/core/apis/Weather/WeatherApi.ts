import axios from 'axios';

import { Configuration, WEATHER_API_URL } from 'core';
import { WeatherApiResponse } from 'models';
import { cityWeather } from './mocks/CityWeather';

export const getWeatherApiData = async (
  lat?: number,
  lon?: number,
): Promise<WeatherApiResponse> => {
  if (Configuration.isUsingInMemoryApis) {
    return getWeatherApiDataFromFiles(lat, lon);
  }

  const response = await axios.get<WeatherApiResponse>(
    `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${Configuration.apiKey}&units=metric`,
  );

  return response.data;
};

const getWeatherApiDataFromFiles = (
  lat?: number,
  lon?: number,
): Promise<WeatherApiResponse> => {
  return new Promise((resolve, reject) => {
    const latLonKey = `${lat}-${lon}`;

    if (cityWeather[latLonKey]) {
      resolve(cityWeather[latLonKey]);
    } else {
      reject();
    }
  });
};
