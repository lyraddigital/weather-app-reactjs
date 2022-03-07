import { Configuration } from './Configuration';

describe('Configuration', () => {
  it('Contains the correct configuration from the weatherConfig.js file', () => {
    // Assert
    expect(Configuration.weatherApiKey).toBe('testWeatherApiKey');
    expect(Configuration.weatherRefreshRateInMilliseconds).toBe(30000);
    expect(Configuration.weatherLocationStorageKey).toBe('test-location-key');
    expect(Configuration.isUsingInMemoryApis).toBe(true);
  });
});
