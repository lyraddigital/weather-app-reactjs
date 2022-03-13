import axios, { AxiosResponse } from 'axios';

import { getConfiguration } from 'core/Configuration';
import { WEATHER_API_URL } from 'core/Constants';
import { WeatherApiResponse } from 'models';
import { getWeatherApiData } from './WeatherApi';

jest.mock('axios');
jest.mock('../../Configuration', () => ({
  getConfiguration() {
    return {
      weatherApiKey: 'someWeatherApiKey',
      weatherRefreshRateInMilliseconds: 60000,
      weatherLocationStorageKey: 'some-location-key',
      isUsingInMemoryApis: false,
    };
  },
}));

describe('WeatherApi', () => {
  it('Contains the correct configuration for test purposes', async () => {
    // Arrange
    const lat = 1;
    const lon = 1;
    const weatherApiResponse: WeatherApiResponse = {
      current: {
        temp: 24,
      },
    };
    const mockedAxiosGetFn = axios.get as jest.MockedFunction<typeof axios.get>;
    mockedAxiosGetFn.mockImplementationOnce(() =>
      Promise.resolve<AxiosResponse<WeatherApiResponse>>({
        data: weatherApiResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
      }),
    );

    // Action
    const result = await getWeatherApiData(lat, lon);

    // Assert
    expect(result.current?.temp).toBe(24);
    expect(mockedAxiosGetFn.mock.calls[0][0]).toBe(
      `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${
        getConfiguration().weatherApiKey
      }&units=metric`,
    );
  });
});
