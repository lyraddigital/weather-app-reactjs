import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { LocationContext, WeatherContext } from 'context';
import { WeatherApiResponse, WeatherLocation } from 'models';

import { Header } from './Header';

describe('Header', () => {
  it('No location or weather data, renders an empty header', () => {
    // Arrange / Action
    render(
      <Router>
        <Header />
      </Router>,
    );

    const headingEl = screen.queryByRole('heading');

    // Assert
    expect(headingEl?.textContent).toBe(', ');
  });

  it('Location and weather data set, renders the header correctly', () => {
    // Arrange
    const location: WeatherLocation = {
      city: 'Melbourne',
      country: 'Australia',
    };
    const weatherData: WeatherApiResponse = {
      current: {
        dt: 1638190800,
      },
      timezone: 'Australia/Sydney',
    };

    // Action
    render(
      <Router>
        <LocationContext.Provider
          value={{ location, updateLocation: () => {} }}
        >
          <WeatherContext.Provider
            value={{ data: weatherData, isFirstLoad: false, isLoading: true }}
          >
            <Header />
          </WeatherContext.Provider>
        </LocationContext.Provider>
      </Router>,
    );

    // Assert
    const headingEl = screen.queryByRole('heading');
    const updatedDateEl = screen.queryByText('Tuesday 30th November');
    const updatedTimeMessageEl = screen.queryByText('Last updated at 12:00 AM');

    expect(headingEl?.textContent).toBe('Melbourne, Australia');
    expect(updatedDateEl).toBeTruthy();
    expect(updatedTimeMessageEl).toBeTruthy();
  });
});
