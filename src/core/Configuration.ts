declare var WeatherApp: any;
const isDevelopment = process.env.NODE_ENV === 'development';

const apiKey = isDevelopment
  ? process.env.REACT_APP_WEATHER_API_KEY || ''
  : !isDevelopment && WeatherApp?.weatherConfig?.WEATHER_API_KEY
  ? WeatherApp.weatherConfig.WEATHER_API_KEY
  : '';

const weatherRefreshRateInMilliseconds =
  isDevelopment &&
  process.env.REACT_APP_WEATHER_UPDATE_FREQUENCY_IN_MILLISECONDS
    ? parseInt(process.env.REACT_APP_WEATHER_UPDATE_FREQUENCY_IN_MILLISECONDS)
    : !isDevelopment &&
      WeatherApp?.weatherConfig?.WEATHER_UPDATE_FREQUENCY_IN_MILLISECONDS
    ? parseInt(
        WeatherApp.weatherConfig.WEATHER_UPDATE_FREQUENCY_IN_MILLISECONDS,
      )
    : 60000;

export const Configuration = {
  apiKey,
  weatherRefreshRateInMilliseconds,
};
