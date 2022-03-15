import { render, RenderResult, screen, waitFor } from '@testing-library/react';
import { Route, MemoryRouter as Router, Switch } from 'react-router';

import { WeatherLocation } from 'models';
import { LocationContext } from 'context';

import { WeatherPage } from './WeatherPage';

const renderWithLocation = async (
  location?: WeatherLocation,
): Promise<RenderResult> => {
  const dummyUpdateLocation = () => {
    // Do nothing
  };

  return waitFor(() =>
    render(
      <LocationContext.Provider
        value={{ location, updateLocation: dummyUpdateLocation }}
      >
        <Router initialEntries={['/', 'set-location']}>
          <Switch>
            <Route path="/set-location">
              <div>Setting Location</div>
            </Route>
            <Route path="" exact>
              <WeatherPage />
            </Route>
          </Switch>
        </Router>
      </LocationContext.Provider>,
    ),
  );
};

describe('WeatherPage', () => {
  it('No existing weather set in storage. Redirects to set location page', async () => {
    // Arrange / Action
    await renderWithLocation(undefined);

    // Assert
    screen.getByText('Setting Location');
  });

  it('Existing weather set in storage. Shows Weather page', async () => {
    // Arrange / Action
    await renderWithLocation({
      lat: 100,
      lon: 100,
      city: 'Sydney',
      country: 'Australia',
    });

    // Assert
    expect(() => screen.getByText('Setting Location')).toThrow();
  });
});
