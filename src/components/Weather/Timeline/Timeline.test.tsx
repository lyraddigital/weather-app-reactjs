import { render, screen } from '@testing-library/react';

import { WeatherContext } from 'context';
import { WeatherApiResponse } from 'models';

import { Timeline } from './Timeline';

describe('Timeline', () => {
  it('Shows the correct heading for the timeline section', () => {
    // Arrange / Action
    render(
      <WeatherContext.Provider
        value={{ data: undefined, isFirstLoad: false, isLoading: true }}
      >
        <Timeline />
      </WeatherContext.Provider>,
    );

    // Assert
    const timelineHeading = screen.getByRole('heading');

    expect(timelineHeading.textContent).toBe("Today's weather");
  });

  it('Shows the correct timeline data based on 24 hours of hourly data', () => {
    // Arrange
    const weatherData: WeatherApiResponse = {
      hourly: [
        {
          temp: 14,
          dt: 1638190800, // 12AM
          weather: [{ id: 800 }],
        },
        {
          temp: 14,
          dt: 1638194400, // 1AM
          weather: [{ id: 801 }],
        },
        {
          temp: 13,
          dt: 1638198000, // 2AM
          weather: [{ id: 802 }],
        },
        {
          temp: 13,
          dt: 1638201600, // 3AM
          weather: [{ id: 802 }],
        },
        {
          temp: 13,
          dt: 1638205200, // 4AM
          weather: [{ id: 803 }],
        },
        {
          temp: 14,
          dt: 1638208800, // 5AM
          weather: [{ id: 803 }],
        },
        {
          temp: 15,
          dt: 1638212400, // 6AM
          weather: [{ id: 803 }],
        },
        {
          temp: 15,
          dt: 1638216000, // 7AM
          weather: [{ id: 803 }],
        },
        {
          temp: 18,
          dt: 1638219600, // 8AM
          weather: [{ id: 802 }],
        },
        {
          temp: 20,
          dt: 1638223200, // 9AM
          weather: [{ id: 802 }],
        },
        {
          temp: 21,
          dt: 1638226800, // 10AM
          weather: [{ id: 801 }],
        },
        {
          temp: 23,
          dt: 1638230400, // 11AM
          weather: [{ id: 802 }],
        },
        {
          temp: 24,
          dt: 1638234000, // 12PM
          weather: [{ id: 804 }],
        },
        {
          temp: 24,
          dt: 1638237600, // 1PM
          weather: [{ id: 801 }],
        },
        {
          temp: 24,
          dt: 1638241200, // 2PM
          weather: [{ id: 802 }],
        },
        {
          temp: 25,
          dt: 1638244800, // 3PM
          weather: [{ id: 802 }],
        },
        {
          temp: 26,
          dt: 1638248400, // 4PM
          weather: [{ id: 803 }],
        },
        {
          temp: 26,
          dt: 1638252000, // 5PM
          weather: [{ id: 803 }],
        },
        {
          temp: 24,
          dt: 1638255600, // 6PM
          weather: [{ id: 803 }],
        },
        {
          temp: 23,
          dt: 1638259200, // 7PM
          weather: [{ id: 803 }],
        },
        {
          temp: 22,
          dt: 1638262800, // 8PM
          weather: [{ id: 802 }],
        },
        {
          temp: 20,
          dt: 1638266400, // 9PM
          weather: [{ id: 802 }],
        },
        {
          temp: 19,
          dt: 1638270000, // 10PM
          weather: [{ id: 801 }],
        },
        {
          temp: 19,
          dt: 23, // 11PM
          weather: [{ id: 802 }],
        },
      ],
      timezone: 'Australia/Sydney',
    };

    // Action
    const { container } = render(
      <WeatherContext.Provider
        value={{ data: weatherData, isFirstLoad: false, isLoading: true }}
      >
        <Timeline />
      </WeatherContext.Provider>,
    );

    // Assert
    const timelinePeriodEls = container.querySelectorAll('.item');

    expect(timelinePeriodEls.length).toBe(6);
    expect(timelinePeriodEls[0].firstChild?.textContent).toBe('3AM');
    expect(timelinePeriodEls[1].firstChild?.textContent).toBe('6AM');
    expect(timelinePeriodEls[2].firstChild?.textContent).toBe('9AM');
    expect(timelinePeriodEls[3].firstChild?.textContent).toBe('12PM');
    expect(timelinePeriodEls[4].firstChild?.textContent).toBe('3PM');
    expect(timelinePeriodEls[5].firstChild?.textContent).toBe('6PM');
    expect(timelinePeriodEls[0].lastChild?.textContent).toBe('13\u00b0');
    expect(timelinePeriodEls[1].lastChild?.textContent).toBe('15\u00b0');
    expect(timelinePeriodEls[2].lastChild?.textContent).toBe('20\u00b0');
    expect(timelinePeriodEls[3].lastChild?.textContent).toBe('24\u00b0');
    expect(timelinePeriodEls[4].lastChild?.textContent).toBe('25\u00b0');
    expect(timelinePeriodEls[5].lastChild?.textContent).toBe('24\u00b0');
  });
});
