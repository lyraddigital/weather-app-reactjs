import { render, screen } from '@testing-library/react';

import { WeatherContext } from 'context';
import { WeatherApiResponse } from 'models';

import { Forecast } from './Forecast';

describe('Forecast', () => {
  it('No weather data, shows no forecast data', () => {
    // Arrange / Action
    const { container } = render(
      <WeatherContext.Provider
        value={{ data: undefined, isFirstLoad: false, isLoading: true }}
      >
        <Forecast />
      </WeatherContext.Provider>,
    );

    // Assert
    const rowEls = container.querySelectorAll('.row');
    expect(rowEls.length).toBe(0);
  });

  it('Weather data with forecast details, shows forecast entries on screen', () => {
    // Arrange
    const weatherData: WeatherApiResponse = {
      daily: [
        // Skipped item
        {
          dt: 1638320400,
        },
        {
          dt: 1638406800,
        },
        {
          dt: 1638493200,
        },
        {
          dt: 1638579600,
        },
        {
          dt: 1638666000,
        },
        {
          dt: 1638752400,
        },
        {
          dt: 1638838800,
        },
      ],
      timezone: 'Australia/Sydney',
    };

    // Action
    const { container } = render(
      <WeatherContext.Provider
        value={{ data: weatherData, isFirstLoad: false, isLoading: true }}
      >
        <Forecast />
      </WeatherContext.Provider>,
    );

    // Assert
    const dateEls = container.querySelectorAll('.row');
    expect(dateEls.length).toBe(5);

    // Note that we only get the day name, so we'll ensure that
    // the first day shown is on a Thursday (as 01/12/2021 was on a Thursday).
    // The last one will be on a Monday (as 06/12/2021 was on a Monday)
    expect(dateEls[0].firstChild?.firstChild?.textContent).toBe('Thu');
    expect(dateEls[1].firstChild?.firstChild?.textContent).toBe('Fri');
    expect(dateEls[2].firstChild?.firstChild?.textContent).toBe('Sat');
    expect(dateEls[3].firstChild?.firstChild?.textContent).toBe('Sun');
    expect(dateEls[4].firstChild?.firstChild?.textContent).toBe('Mon');
  });

  it('Shows the correct heading text', () => {
    // Arrange / Action
    render(
      <WeatherContext.Provider
        value={{ data: undefined, isFirstLoad: false, isLoading: true }}
      >
        <Forecast />
      </WeatherContext.Provider>,
    );

    // Assert
    const headingEl = screen.getByRole('heading');
    expect(headingEl.textContent).toBe('Next 5 days');
  });
});
