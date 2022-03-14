declare let WeatherApp: {
  weatherConfig: {
    WEATHER_API_KEY: string;
    WEATHER_UPDATE_FREQUENCY_IN_MILLISECONDS: string;
    WEATHER_LOCATION_STORAGE_KEY: string;
    USE_INMEMORY_APIS: string;
  };
};

interface Configuration {
  weatherApiKey: string;
  weatherRefreshRateInMilliseconds: number;
  weatherLocationStorageKey: string;
  isUsingInMemoryApis: boolean;
}

export const getConfiguration = (): Configuration => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isTest = process.env.NODE_ENV === 'test';
  
  let weatherApiKey = '';
  let weatherRefreshRateInMilliseconds = 60000;
  let weatherLocationStorageKey = '';
  let isUsingInMemoryApis = false;

  if (isDevelopment) {
    weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY || '';
    weatherRefreshRateInMilliseconds = parseInt(
      process.env.REACT_APP_WEATHER_UPDATE_FREQUENCY_IN_MILLISECONDS || '',
    );
    weatherLocationStorageKey =
      process.env.REACT_APP_WEATHER_LOCATION_STORAGE_KEY || '';
    isUsingInMemoryApis = process.env.REACT_APP_API_USE_IN_MEMORY_APIS == 'true';
  } else if (isTest) {
    weatherApiKey = 'testWeatherApiKey';
    weatherRefreshRateInMilliseconds = 30000;
    weatherLocationStorageKey = 'test-location-key';
    isUsingInMemoryApis = true;
  } else {
      weatherApiKey = WeatherApp.weatherConfig.WEATHER_API_KEY || '';
      weatherRefreshRateInMilliseconds = parseInt(
        WeatherApp.weatherConfig.WEATHER_UPDATE_FREQUENCY_IN_MILLISECONDS,
      );
      weatherLocationStorageKey =
        WeatherApp.weatherConfig.WEATHER_LOCATION_STORAGE_KEY || '';
      isUsingInMemoryApis = WeatherApp.weatherConfig.USE_INMEMORY_APIS == 'true';
  }
  
  return {
    weatherApiKey,
    weatherRefreshRateInMilliseconds,
    weatherLocationStorageKey,
    isUsingInMemoryApis,
  };
}
