import { useContext } from 'react';
import { render, RenderResult, screen, waitFor } from '@testing-library/react';
import { MemoryRouter as Router, Route, Switch } from 'react-router';

import { WeatherLocation, WeatherState } from 'models';
import { LocationContext, WeatherContext } from 'context';

import { WeatherProvider } from './WeatherProvider';

const TestProviderChildComponent = () => {
  const weatherResult = useContext<WeatherState>(WeatherContext);

  return (
    <>
      <div data-testid="current-temp">{weatherResult.data?.current?.temp}</div>
      <div data-testid="timezone">{weatherResult.data?.timezone}</div>
    </>
  );
};

const renderWithLocation = async (
  weatherProvider: JSX.Element,
  location: WeatherLocation,
): Promise<RenderResult> => {
  const updateLocation = () => {
    // Do nothing
  };

  return waitFor(() =>
    render(
      <LocationContext.Provider value={{ location, updateLocation }}>
        <Router initialEntries={['/', 'load-error']}>
          <Switch>
            <Route path="/load-error">
              <div data-testid="no-weather-data">No data found.</div>
            </Route>
            <Route path="">{weatherProvider}</Route>
          </Switch>
        </Router>
      </LocationContext.Provider>,
    ),
  );
};

describe('WeatherProvider', () => {
  it('By default contains no weather details', async () => {
    // Arrange / Action
    await renderWithLocation(
      <WeatherProvider>
        <TestProviderChildComponent />
      </WeatherProvider>,
      {
        city: 'No where',
        country: 'No country',
        lat: -1.4949,
        lon: 22.93938,
      },
    );

    // Assert
    const noWeatherDataEl = screen.getByTestId('no-weather-data');

    expect(noWeatherDataEl).toBeTruthy();
  });

  it('Passing in Melbourne geocode. Returns current weather data for Melbourne', async () => {
    // Arrange / Action
    await renderWithLocation(
      <WeatherProvider>
        <TestProviderChildComponent />
      </WeatherProvider>,
      {
        city: 'Melbourne',
        country: 'Australia',
        lat: -33.8688197,
        lon: 151.2092955,
      },
    );

    // Assert
    const currentTempEl = screen.getByTestId('current-temp');
    const timezoneEl = screen.getByTestId('timezone');

    expect(currentTempEl.textContent).toBe('17');
    expect(timezoneEl.textContent).toBe('Australia/Sydney');
  });

  it('Passing in London geocode. Returns current weather data for London', async () => {
    // Arrange / Action
    await renderWithLocation(
      <WeatherProvider>
        <TestProviderChildComponent />
      </WeatherProvider>,
      {
        city: 'London',
        country: 'England',
        lat: 51.5072178,
        lon: -0.1275862,
      },
    );

    // Assert
    const currentTempEl = screen.getByTestId('current-temp');
    const timezoneEl = screen.getByTestId('timezone');

    expect(currentTempEl.textContent).toBe('5');
    expect(timezoneEl.textContent).toBe('Europe/London');
  });

  it('Passing in New York geocode. Returns current weather data for New York', async () => {
    // Arrange / Action
    await renderWithLocation(
      <WeatherProvider>
        <TestProviderChildComponent />
      </WeatherProvider>,
      {
        city: 'New York',
        country: 'United States',
        lat: 40.7127753,
        lon: -74.0059728,
      },
    );

    // Assert
    const currentTempEl = screen.getByTestId('current-temp');
    const timezoneEl = screen.getByTestId('timezone');

    expect(currentTempEl.textContent).toBe('17.44');
    expect(timezoneEl.textContent).toBe('America/New_York');
  });
});
