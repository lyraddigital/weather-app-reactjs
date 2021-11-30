import { render } from '@testing-library/react';

import { WeatherContext } from 'context';
import { WeatherApiResponse } from 'models';

import { Timeline } from './Timeline';

describe('Timeline', () => {
  it('Shows the correct heading for the timeline section', async () => {
    // Arrange / Action
    const wrapper = render(
      <WeatherContext.Provider value={undefined}>
        <Timeline />
      </WeatherContext.Provider>,
    );

    // Assert
    const timelineHeading = await wrapper.findByTestId('timeline-heading');
    expect(timelineHeading.textContent).toBe("Today's weather");
  });

  it('Shows the correct timeline data based on 24 hours of hourly data', async () => {
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
    const wrapper = render(
      <WeatherContext.Provider value={weatherData}>
        <Timeline />
      </WeatherContext.Provider>,
    );

    // Assert
    const timelinePeriodTimes = await wrapper.findAllByTestId('period-time');
    const timelinePeriodTemps = await wrapper.findAllByTestId('period-temp');

    expect(timelinePeriodTimes.length).toBe(6);
    expect(timelinePeriodTimes[0].textContent).toBe('3AM');
    expect(timelinePeriodTimes[1].textContent).toBe('6AM');
    expect(timelinePeriodTimes[2].textContent).toBe('9AM');
    expect(timelinePeriodTimes[3].textContent).toBe('12PM');
    expect(timelinePeriodTimes[4].textContent).toBe('3PM');
    expect(timelinePeriodTimes[5].textContent).toBe('6PM');

    expect(timelinePeriodTemps.length).toBe(6);
    expect(timelinePeriodTemps[0].textContent).toBe('13\u00b0');
    expect(timelinePeriodTemps[1].textContent).toBe('15\u00b0');
    expect(timelinePeriodTemps[2].textContent).toBe('20\u00b0');
    expect(timelinePeriodTemps[3].textContent).toBe('24\u00b0');
    expect(timelinePeriodTemps[4].textContent).toBe('25\u00b0');
    expect(timelinePeriodTemps[5].textContent).toBe('24\u00b0');
  });
});
