import { render } from '@testing-library/react';

import { WeatherStatistics } from 'models';
import { Stats } from './Stats';

describe('Stats', () => {
  it('Shows the correct information in the component when all data is set', () => {
    // Arrange
    const sunriseTime = new Date(2022, 2, 13, 6, 33);
    const sunsetTime = new Date(2022, 2, 13, 19, 45);
    const details: WeatherStatistics = {
      sunriseTime: sunriseTime,
      sunsetTime: sunsetTime,
      highTemp: 35,
      lowTemp: 19,
      windSpeed: 33,
      rainPercentage: 2,
    };

    // Action
    const { container } = render(<Stats details={details} />);

    // Assert
    const fieldValueEls = container.querySelectorAll('.value');

    expect(fieldValueEls[0]?.textContent).toBe(`${details.highTemp}\u00b0`);
    expect(fieldValueEls[1]?.textContent).toBe(`${details.lowTemp}\u00b0`);
    expect(fieldValueEls[2]?.textContent).toBe(`${details.windSpeed}km/h`);
    expect(fieldValueEls[3]?.textContent).toBe(`${details.rainPercentage}%`);
    expect(fieldValueEls[4]?.textContent).toBe('6:33');
    expect(fieldValueEls[5]?.textContent).toBe('19:45');
  });

  it('Shows blank for sunrise and sunset time as it is not included', () => {
    // Arrange
    const details: WeatherStatistics = {
      highTemp: 35,
      lowTemp: 19,
      windSpeed: 33,
      rainPercentage: 2,
    };

    // Action
    const { container } = render(<Stats details={details} />);

    // Assert
    const fieldValueEls = container.querySelectorAll('.value');

    expect(fieldValueEls[4]?.textContent).toBe('');
    expect(fieldValueEls[5]?.textContent).toBe('');
  });
});
