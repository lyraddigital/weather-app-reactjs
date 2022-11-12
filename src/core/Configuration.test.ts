import { getConfiguration } from './Configuration';

describe('Configuration', () => {
  it('Contains the correct configuration for test purposes', () => {
    const configuration = getConfiguration();

    // Assert
    expect(configuration.weatherApiKey).toBe('testWeatherApiKey');
    expect(configuration.weatherRefreshRateInMilliseconds).toBe(30000);
    expect(configuration.weatherLocationStorageKey).toBe('test-location-key');
    expect(configuration.isUsingInMemoryApis).toBe(true);
  });
});
