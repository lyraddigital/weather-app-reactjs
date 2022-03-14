import { render, screen } from '@testing-library/react';

import { WeatherContext } from 'context';
import { WeatherApiResponse } from 'models';

import { WeatherContent } from './WeatherContent';

describe('WeatherContent', () => {
  it('Shows no weather found as text if current temperature is not set.', () => {
    // Arrange / Action
    render(
      <WeatherContext.Provider
        value={{ data: undefined, isFirstLoad: false, isLoading: false }}
      >
        <WeatherContent />
      </WeatherContext.Provider>,
    );

    // Assert
    screen.getByText('No weather data found..');
  });

  it('The no weather found as text is not shown if current temperature is set.', () => {
    // Arrange
    const weatherData: WeatherApiResponse = {
      current: {
        temp: 24,
      },
    };

    // Action
    render(
      <WeatherContext.Provider
        value={{ data: weatherData, isFirstLoad: false, isLoading: false }}
      >
        <WeatherContent />
      </WeatherContext.Provider>,
    );

    const noWeatherEl = screen.queryByText('No weather data found..');

    // Assert
    expect(noWeatherEl).toBeFalsy();
  });
});
