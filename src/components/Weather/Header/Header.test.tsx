import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { LocationContext, WeatherContext } from 'context';
import { WeatherApiResponse, WeatherLocation } from 'models';

import { Header } from './Header';

describe('Header', () => {
  it('No location or weather data, renders an empty header', async () => {
    // Arrange / Action
    const wrapper = render(
      <Router>
        <Header />
      </Router>,
    );

    // Assert
    const headingEl = await wrapper.findByTestId('weather-heading');
    const headingCityEl = await wrapper.findByTestId('weather-heading-city');
    const headingCountryEl = await wrapper.findByTestId(
      'weather-heading-country',
    );

    expect(headingEl.textContent).toBe(', ');
    expect(headingCityEl.textContent).toBe('');
    expect(headingCountryEl.textContent).toBe('');
  });

  it('Location and weather data set, renders the header correctly', async () => {
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
    const wrapper = render(
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
        ,
      </Router>,
    );

    // Assert
    const headingEl = await wrapper.findByTestId('weather-heading');
    const headingCityEl = await wrapper.findByTestId('weather-heading-city');
    const headingCountryEl = await wrapper.findByTestId(
      'weather-heading-country',
    );
    const updatedDateEl = await wrapper.findByTestId('weather-updated-date');
    const upatedTimeMessageEl = await wrapper.findByTestId(
      'weather-updated-time-message',
    );
    const upatedTimeEl = await wrapper.findByTestId('weather-updated-time');

    expect(headingEl.textContent).toBe('Melbourne, Australia');
    expect(headingCityEl.textContent).toBe('Melbourne');
    expect(headingCountryEl.textContent).toBe('Australia');
    expect(updatedDateEl.textContent).toBe('Tuesday 30th November');
    expect(upatedTimeMessageEl.textContent).toBe('Last updated at 12:00 AM');
    expect(upatedTimeEl.textContent).toBe('12:00 AM');
  });
});
