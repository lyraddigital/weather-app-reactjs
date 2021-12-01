import { render } from "@testing-library/react";

import { WeatherContext } from "context";
import { WeatherApiResponse } from "models";

import { Forecast } from "./Forecast";

describe('Forecast', () => {
  it('No weather data, shows no forecast data', async () => {
    // Arrange / Action
    const wrapper = render(
      <WeatherContext.Provider value={undefined}>
        <Forecast />
      </WeatherContext.Provider>
    );

    // Assert
    const forecastDayEls = await wrapper.queryAllByTestId('forecast-day-name');
    expect(forecastDayEls.length).toBe(0);
  });

  it('Weather data with forecast details, shows forecast data', async () => {
    // Arrange 
    const weatherData: WeatherApiResponse = {
      daily: [
        // Skipped item
        {
          dt: 494948,
          weather: [ { id: 800 }],
          temp: { min: 10, max: 18 },
          humidity: 34,
          wind_speed: 30
        },
        {
          dt: 494948,
          weather: [ { id: 800 }],
          temp: { min: 14, max: 22 },
          humidity: 13,
          wind_speed: 5
        },
        {
          dt: 494948,
          weather: [ { id: 800 }],
          temp: { min: 14, max: 22 },
          humidity: 13,
          wind_speed: 5
        },
        {
          dt: 494948,
          weather: [ { id: 800 }],
          temp: { min: 14, max: 22 },
          humidity: 13,
          wind_speed: 5
        },
        {
          dt: 494948,
          weather: [ { id: 800 }],
          temp: { min: 14, max: 22 },
          humidity: 13,
          wind_speed: 5
        },
        {
          dt: 494948,
          weather: [ { id: 800 }],
          temp: { min: 14, max: 22 },
          humidity: 13,
          wind_speed: 5
        },
        {
          dt: 494948,
          weather: [ { id: 800 }],
          temp: { min: 14, max: 22 },
          humidity: 13,
          wind_speed: 5
        }
      ],
      timezone: 'Australia/Sydney'
    };

    // Action
    const wrapper = render(
      <WeatherContext.Provider value={weatherData}>
        <Forecast />
      </WeatherContext.Provider>
    );

    // Assert
    const forecastDayEls = await wrapper.queryAllByTestId('forecast-day-name');
    expect(forecastDayEls.length).toBe(5);
  });
});