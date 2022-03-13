import { render, screen } from '@testing-library/react';
import { getUnixTime } from 'date-fns';

import { formatTime } from 'testing';
import { WeatherContext } from 'context';
import { useWeatherLocalTime } from 'hooks';
import { WeatherApiResponse } from 'models';

const TempLocalTimeChild = () => {
  const localTime = useWeatherLocalTime();
  return <div data-testid="local-time">{formatTime(localTime)}</div>;
};

describe('useWeatherLocalTime', () => {
  it('Returns the correct format for the local time based on the current time in the Weather api.', () => {
    // Arrange
    const apiResponse: WeatherApiResponse = {
      timezone: 'Australia/Sydney',
      current: {
        dt: getUnixTime(Date.UTC(2021, 10, 27)),
      },
    };

    // Action
    render(
      <WeatherContext.Provider
        value={{ data: apiResponse, isFirstLoad: false, isLoading: true }}
      >
        <TempLocalTimeChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const localTimeEl = screen.getByTestId('local-time');

    expect(localTimeEl.textContent).toBe('2021-11-27 11:00:00');
  });

  it('Returns empty for the local time based on an undefined api response.', () => {
    // Arrange / Action
    render(
      <WeatherContext.Provider
        value={{ data: undefined, isFirstLoad: false, isLoading: true }}
      >
        <TempLocalTimeChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const localTimeEl = screen.getByTestId('local-time');

    expect(localTimeEl.textContent).toBe('');
  });

  it('Returns empty for the local time based on an undefined current date in the api response.', () => {
    // Arrange
    const apiResponse: WeatherApiResponse = {
      timezone: 'Australia/Sydney',
      current: {
        dt: undefined,
      },
    };

    // Action
    render(
      <WeatherContext.Provider
        value={{ data: apiResponse, isFirstLoad: false, isLoading: true }}
      >
        <TempLocalTimeChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const localTimeEl = screen.getByTestId('local-time');

    expect(localTimeEl.textContent).toBe('');
  });
});
