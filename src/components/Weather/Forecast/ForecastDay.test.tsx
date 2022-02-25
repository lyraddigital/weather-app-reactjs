import { render } from '@testing-library/react';
import { WeatherForecastDay } from 'models';

import { ForecastDay } from './ForecastDay';

describe('ForecastDay', () => {
  it('day property not set. Returns null', () => {
    // Arrange / Action
    const { container } = render(<ForecastDay />);

    // Assert
    const forecastDayNameEls = container.querySelectorAll('.row');
    expect(forecastDayNameEls.length).toBe(0);
  });

  it('day property is set, sets the correct data in the correct places', () => {
    // Arrange
    const day: WeatherForecastDay = {
      date: new Date(2021, 11, 30),
      weatherId: 800,
      lowTemp: 11,
      highTemp: 22,
      rainPercentage: 2,
      windSpeed: 22,
    };

    // Action
    const { container } = render(<ForecastDay day={day} />);

    // Assert
    const forecastDayFieldValueEls = container.querySelectorAll('.fieldValue');

    expect(forecastDayFieldValueEls[0]?.firstChild?.textContent).toBe('Thu');
    expect(forecastDayFieldValueEls[0]?.lastChild?.textContent).toBe('30/12');
    expect(forecastDayFieldValueEls[2]?.firstChild?.textContent).toBe(
      '11\u00b0',
    );
    expect(forecastDayFieldValueEls[3].firstChild?.textContent).toBe(
      '22\u00b0',
    );
    expect(forecastDayFieldValueEls[4].firstChild?.textContent).toBe('2%');
    expect(forecastDayFieldValueEls[5].firstChild?.textContent).toBe('22km/h');
  });
});
