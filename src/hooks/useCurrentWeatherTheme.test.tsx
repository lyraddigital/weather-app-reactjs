import { render, screen } from '@testing-library/react';
import { getUnixTime } from 'date-fns';

import { WeatherContext } from 'context';
import { useCurrentWeatherTheme } from 'hooks';

const TempChild = () => {
  const { isDarkMode } = useCurrentWeatherTheme();

  return isDarkMode ? <div>Dark Mode</div>: <div>Light Mode</div>;
};

describe('useCurrentWeatherTheme', () => {
  it('When the current time is before sunrise time, returns dark mode as true', () => {
    // Arrange
    const apiResponse = {
      current: {
        sunrise: getUnixTime(Date.UTC(2021, 10, 27, 7, 30, 0)),
        sunset: getUnixTime(Date.UTC(2021, 10, 27, 20, 0, 0)),
        dt: getUnixTime(Date.UTC(2021, 10, 27, 4, 0, 0)),
      },
      timezone: 'Australia/Sydney',
    };

    // Action
    render(
      <WeatherContext.Provider
        value={{ data: apiResponse, isFirstLoad: false, isLoading: true }}
      >
        <TempChild />
      </WeatherContext.Provider>,
    );

    // Assert
    screen.getByText('Dark Mode');
  });

  it('When the current time is after sunset time, returns dark mode as true', () => {
    // Arrange
    const apiResponse = {
      current: {
        sunrise: getUnixTime(Date.UTC(2021, 10, 27, 7, 30, 0)),
        sunset: getUnixTime(Date.UTC(2021, 10, 27, 20, 0, 0)),
        dt: getUnixTime(Date.UTC(2021, 10, 27, 21, 0, 0)),
      },
      timezone: 'Australia/Sydney',
    };

    // Action
    render(
      <WeatherContext.Provider
        value={{ data: apiResponse, isFirstLoad: false, isLoading: true }}
      >
        <TempChild />
      </WeatherContext.Provider>,
    );

    // Assert
    screen.getByText('Dark Mode');
  });

  it('When the current time is between sunrise and sunset time, returns dark mode as false', () => {
    // Arrange
    const apiResponse = {
      current: {
        sunrise: getUnixTime(Date.UTC(2021, 10, 27, 7, 30, 0)),
        sunset: getUnixTime(Date.UTC(2021, 10, 27, 20, 0, 0)),
        dt: getUnixTime(Date.UTC(2021, 10, 27, 12, 0, 0)),
      },
      timezone: 'Australia/Sydney',
    };

    // Action
    render(
      <WeatherContext.Provider
        value={{ data: apiResponse, isFirstLoad: false, isLoading: true }}
      >
        <TempChild />
      </WeatherContext.Provider>,
    );

    // Assert
    screen.getByText('Light Mode');
  });
});
