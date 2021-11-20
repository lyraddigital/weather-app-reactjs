import { WEATHER_API_URL } from './Constants';

describe('Constants', () => {
  it('WEATHER_API_URL is hard coded correctly', () => {
    // Assert
    expect(WEATHER_API_URL).toBe(
      'https://api.openweathermap.org/data/2.5/onecall',
    );
  });
});
