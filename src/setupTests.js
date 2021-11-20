// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mirroring the weatherConfig.js file in the public/static folder
global.WeatherApp = {
  weatherConfig: {
    WEATHER_API_KEY: 'testWeatherApiKey',
    WEATHER_UPDATE_FREQUENCY_IN_MILLISECONDS: '30000',
    WEATHER_LOCATION_STORAGE_KEY: 'test-location-key',
  },
};
