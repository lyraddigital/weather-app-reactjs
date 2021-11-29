import { render } from "@testing-library/react";
import { WeatherStatistics } from "models";
import { Stats } from "./Stats";

describe('Stats', () => {
  it('Shows the correct information in the component when all data is set', async () => {
    // Arrange
    const details: WeatherStatistics = {
      sunriseTime: new Date('2021-11-29T07:30:00Z'),
      sunsetTime: new Date('2021-11-29T20:30:00Z'),
      highTemp: 35,
      lowTemp: 19,
      windSpeed: 33,
      rainPercentage: 2,
    };

    // Action
    const wrapper = render(<Stats details={details} />);

    // Assert
    const highTempEl = await wrapper.findByTestId('statistics-high-temp');
    const lowTempEl = await wrapper.findByTestId('statistics-low-temp');
    const windSpeedEl = await wrapper.findByTestId('statistics-wind-speed');
    const rainPercentageEl = await wrapper.findByTestId('statistics-rain-percentage');
    const sunriseTimeEl = await wrapper.findByTestId('statistics-sunrise-time');
    const sunsetTimeEl = await wrapper.findByTestId('statistics-sunset-time');

    expect(highTempEl.textContent).toBe(`${details.highTemp}\u00b0`);
    expect(lowTempEl.textContent).toBe(`${details.lowTemp}\u00b0`);
    expect(windSpeedEl.textContent).toBe(`${details.windSpeed}km/h`);
    expect(rainPercentageEl.textContent).toBe(`${details.rainPercentage}%`);
    expect(sunriseTimeEl.textContent).toBe('18:30');
    expect(sunsetTimeEl.textContent).toBe('7:30');
  });

  it('Shows blank for sunrise and sunset time as it is not included', async () => {
    // Arrange
    const details: WeatherStatistics = {
      highTemp: 35,
      lowTemp: 19,
      windSpeed: 33,
      rainPercentage: 2,
    };

    // Action
    const wrapper = render(<Stats details={details} />);

    // Assert
    const sunriseTimeEl = await wrapper.findByTestId('statistics-sunrise-time');
    const sunsetTimeEl = await wrapper.findByTestId('statistics-sunset-time');

    expect(sunriseTimeEl.textContent).toBe('');
    expect(sunsetTimeEl.textContent).toBe('');
  });
});