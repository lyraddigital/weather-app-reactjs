import { render } from '@testing-library/react';

import { WeatherTimelinePeriod } from 'models';

import { TimePeriod } from './TimePeriod';

describe('TimePeriod', () => {
  it('Ensuring that all period values are displayed in the correct places.', async () => {
    // Arrange
    const period: WeatherTimelinePeriod = {
      weatherId: 500,
      temp: 30,
      time: new Date(2021, 11, 29),
    };

    // Action
    const wrapper = render(<TimePeriod period={period} />);

    // Assert
    const timeEl = await wrapper.findByTestId('period-time');
    const tempEl = await wrapper.findByTestId('period-temp');
    const weatherImageEl = (await wrapper.findByTestId(
      'weather-icon',
    )) as HTMLImageElement;

    expect(timeEl.textContent).toBe('12AM');
    expect(tempEl.textContent).toBe('30\u00b0');
    expect(weatherImageEl.alt).toBe('Light rain');
    expect(weatherImageEl.src).toBe('http://localhost/rain.svg');
  });

  it('Time is empty if time is not set on the period prop.', async () => {
    // Arrange
    const period: WeatherTimelinePeriod = {
      weatherId: 500,
      temp: 30,
    };

    // Action
    const wrapper = render(<TimePeriod period={period} />);

    // Assert
    const timeEl = await wrapper.findByTestId('period-time');

    expect(timeEl.textContent).toBe('');
  });
});
