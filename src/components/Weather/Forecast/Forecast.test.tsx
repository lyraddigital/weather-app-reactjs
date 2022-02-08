import { render } from '@testing-library/react';

import { WeatherContext } from 'context';
import { WeatherApiResponse } from 'models';

import { Forecast } from './Forecast';

describe('Forecast', () => {
  it('No weather data, shows no forecast data', async () => {
    // Arrange / Action
    const wrapper = render(
      <WeatherContext.Provider
        value={{ data: undefined, isFirstLoad: false, isLoading: true }}
      >
        <Forecast />
      </WeatherContext.Provider>,
    );

    // Assert
    const forecastDayEls = await wrapper.queryAllByTestId('forecast-day-name');
    expect(forecastDayEls.length).toBe(0);
  });

  it('Weather data with forecast details, shows forecast entries on screen', async () => {
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
    const wrapper = render(
      <WeatherContext.Provider
        value={{ data: weatherData, isFirstLoad: false, isLoading: true }}
      >
        <Forecast />
      </WeatherContext.Provider>,
    );

    // Assert
    const forecastDayEls = await wrapper.queryAllByTestId('forecast-day-name');
    expect(forecastDayEls.length).toBe(5);

    // Note that we only get the day name, so we'll ensure that
    // the first day shown is on a Thursday (as 01/12/2021 was on a Thursday).
    // The last one will be on a Monday (as 06/12/2021 was on a Monday)
    expect(forecastDayEls[0].textContent).toBe('Thu');
    expect(forecastDayEls[1].textContent).toBe('Fri');
    expect(forecastDayEls[2].textContent).toBe('Sat');
    expect(forecastDayEls[3].textContent).toBe('Sun');
    expect(forecastDayEls[4].textContent).toBe('Mon');
  });

  it('Shows the correct heading text', async () => {
    // Arrange / Action
    const wrapper = render(
      <WeatherContext.Provider
        value={{ data: undefined, isFirstLoad: false, isLoading: true }}
      >
        <Forecast />
      </WeatherContext.Provider>,
    );

    // Assert
    const headingEl = await wrapper.findByTestId('forecast-heading');
    expect(headingEl.textContent).toBe('Next 5 days');
  });
});
