import { render } from "@testing-library/react";
import { WeatherForecastDay } from "models";

import { ForecastDay } from "./ForecastDay";

describe('ForecastDay', () => {
  it('day property not set. Returns null', async () => {
    // Arrange / Action
    const wrapper = render(<ForecastDay />);

    // Assert
    const forecastDayNameEls = wrapper.queryAllByTestId('forecast-day-name');
    expect(forecastDayNameEls.length).toBe(0);
  });

  it('day property is set, sets the correct data in the correct places', async () => {
    // Arrange 
    const day: WeatherForecastDay = {
      date: new Date(2021, 11, 30),
      weatherId: 800,
      lowTemp: 11,
      highTemp: 22,
      rainPercentage: 2,
      windSpeed: 22
    };

    // Action
    const wrapper = render(<ForecastDay day={day} />);

    // Assert
    const forecastDayNameEl = await wrapper.findByTestId('forecast-day-name');
    const forecastDayDateEl = await wrapper.findByTestId('forecast-day-date');
    const forecastDayLowTempEl = await wrapper.findByTestId('forecast-day-lowTemp');
    const forecastDayHighTempEl = await wrapper.findByTestId('forecast-day-highTemp');
    const forecastDayRainPercentageEl = await wrapper.findByTestId('forecast-rain-percentage');
    const forecastDayWindSpeedEl = await wrapper.findByTestId('forecast-day-windSpeed');

    expect(forecastDayNameEl.textContent).toBe('Thu');
    expect(forecastDayDateEl.textContent).toBe('30/12');
    expect(forecastDayLowTempEl.textContent).toBe('11\u00b0');
    expect(forecastDayHighTempEl.textContent).toBe('22\u00b0');
    expect(forecastDayRainPercentageEl.textContent).toBe('2%');
    expect(forecastDayWindSpeedEl.textContent).toBe('22km/h');
  });
});