import { render } from '@testing-library/react';

import { WeatherTimelinePeriod } from 'models';

import { TimePeriod } from './TimePeriod';

describe('TimePeriod', () => {
  it('Ensuring that all period values are displayed in the correct places.', () => {
    // Arrange
    const period: WeatherTimelinePeriod = {
      weatherId: 500,
      temp: 30,
      time: new Date(2021, 11, 29),
    };

    // Action
    const { container } = render(<TimePeriod period={period} />);

    // Assert
    const timePeriodEl = container.querySelector('.item');

    expect(timePeriodEl?.firstChild?.textContent).toBe('12AM');
    expect(timePeriodEl?.lastChild?.textContent).toBe('30\u00b0');
    expect((timePeriodEl?.children[1] as HTMLImageElement).alt).toBe(
      'Light rain',
    );

    expect((timePeriodEl?.children[1] as HTMLImageElement).src).toBe(
      'http://localhost/rain.svg',
    );
  });

  it('Time is empty if time is not set on the period prop.', () => {
    // Arrange
    const period: WeatherTimelinePeriod = {
      weatherId: 500,
      temp: 30,
    };

    // Action
    const { container } = render(<TimePeriod period={period} />);

    // Assert
    const timePeriodEl = container.querySelector('.item');

    expect(timePeriodEl?.firstChild?.textContent).toBe('');
  });
});
