import { render, screen } from '@testing-library/react';
import { getUnixTime } from 'date-fns';

import { formatTime } from 'testing';
import { useForecast } from 'hooks';
import { WeatherContext } from 'context';
import {
  DailyForecastApiResponse,
  WeatherDetailsApiResponse,
  WeatherForecastDay,
} from 'models';

const TempForecastChild = () => {
  const forecast = useForecast();

  const forecastDayEls = forecast.map((f: WeatherForecastDay, i: number) => (
    <div key={i}>
      <div data-testid={`forecast-day-dt-${i}`}>{formatTime(f.date)}</div>
      <div data-testid={`forecast-day-high-temp-${i}`}>{f.highTemp}</div>
      <div data-testid={`forecast-day-low-temp-${i}`}>{f.lowTemp}</div>
      <div data-testid={`forecast-day-rain-percentage-${i}`}>
        {f.rainPercentage}
      </div>
      <div data-testid={`forecast-day-weather-id-${i}`}>{f.weatherId}</div>
      <div data-testid={`forecast-day-wind-speed-${i}`}>{f.windSpeed}</div>
    </div>
  ));

  return <div>{forecastDayEls}</div>;
};

const createDailyForecast = (
  index: number,
  dailyWeather?: WeatherDetailsApiResponse,
): DailyForecastApiResponse => {
  const weather = dailyWeather || { id: 1 };

  return {
    dt: getUnixTime(Date.UTC(2021, 10, 27)),
    humidity: 3 * index,
    wind_speed: 6 * index,
    weather: [weather],
    temp: {
      min: 1 * index,
      max: 2 * index,
    },
  };
};

describe('useForecast', () => {
  it('Returns a Forecast array when the ApiResponse is defined', () => {
    // Arrange
    const weatherIdResponse = { id: 3 };
    const dailyForecastOne = createDailyForecast(0);
    const dailyForecastTwo = createDailyForecast(1, weatherIdResponse);
    const apiResponse = {
      daily: [dailyForecastOne, dailyForecastTwo],
      timezone: 'Australia/Sydney',
    };

    // Action
    render(
      <WeatherContext.Provider
        value={{ data: apiResponse, isFirstLoad: false, isLoading: true }}
      >
        <TempForecastChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const forecastDayDtEl = screen.getByTestId(`forecast-day-dt-0`);
    const forecastDayHighTempEl = screen.getByTestId(
      `forecast-day-high-temp-0`,
    );
    const forecastDayLowTempEl = screen.getByTestId(`forecast-day-low-temp-0`);
    const forecastDayRainPercentageEl = screen.getByTestId(
      `forecast-day-rain-percentage-0`,
    );
    const forecastDayWeatherIdEl = screen.getByTestId(
      `forecast-day-weather-id-0`,
    );
    const forecastDayWindSpeedEl = screen.getByTestId(
      `forecast-day-wind-speed-0`,
    );

    expect(forecastDayDtEl.textContent).toBe('2021-11-27 11:00:00');
    expect(forecastDayHighTempEl.textContent).toBe(
      dailyForecastTwo.temp?.max.toString(),
    );

    expect(forecastDayLowTempEl.textContent).toBe(
      dailyForecastTwo.temp?.min.toString(),
    );

    expect(forecastDayRainPercentageEl.textContent).toBe(
      dailyForecastTwo.humidity?.toString(),
    );

    expect(forecastDayWeatherIdEl.textContent).toBe(
      weatherIdResponse.id.toString(),
    );

    expect(forecastDayWindSpeedEl.textContent).toBe(
      dailyForecastTwo.wind_speed?.toString(),
    );
  });

  it('Returns an empty Forecast array when the ApiResponse is not defined', () => {
    // Arrange
    const apiResponse = {
      timezone: 'Australia/Sydney',
    };

    // Action
    render(
      <WeatherContext.Provider
        value={{ data: apiResponse, isFirstLoad: false, isLoading: true }}
      >
        <TempForecastChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const forecastDayDtEls = screen.queryAllByTestId(`forecast-day-dt-0`);

    expect(forecastDayDtEls.length).toBe(0);
  });

  it('Returns an empty Forecast array when the ApiResponse.daily object is not defined', () => {
    // Arrange / Action
    render(
      <WeatherContext.Provider
        value={{ data: undefined, isFirstLoad: false, isLoading: true }}
      >
        <TempForecastChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const forecastDayDtEls = screen.queryAllByTestId(`forecast-day-dt-0`);

    expect(forecastDayDtEls.length).toBe(0);
  });

  it('Returns a maximum of 5 forecasts starting from the second record to the 6th', () => {
    // Arrange
    const daily = [0, 1, 2, 3, 4, 5, 6].map((i: number) =>
      createDailyForecast(i),
    );
    const apiResponse = {
      daily,
      timezone: 'Australia/Sydney',
    };

    // Action
    render(
      <WeatherContext.Provider
        value={{ data: apiResponse, isFirstLoad: false, isLoading: true }}
      >
        <TempForecastChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const forecastDayHighTempElOne = screen.getByTestId(
      `forecast-day-high-temp-0`,
    );
    const forecastDayHighTempElTwo = screen.getByTestId(
      `forecast-day-high-temp-1`,
    );
    const forecastDayHighTempElThree = screen.getByTestId(
      `forecast-day-high-temp-2`,
    );
    const forecastDayHighTempElFour = screen.getByTestId(
      `forecast-day-high-temp-3`,
    );
    const forecastDayHighTempElFive = screen.getByTestId(
      `forecast-day-high-temp-4`,
    );
    const forecastDayHighTempElSixes = screen.queryAllByTestId(
      `forecast-day-high-temp-5`,
    );

    expect(forecastDayHighTempElOne.textContent).toBe(
      apiResponse.daily[1].temp?.max.toString(),
    );

    expect(forecastDayHighTempElTwo.textContent).toBe(
      apiResponse.daily[2].temp?.max.toString(),
    );

    expect(forecastDayHighTempElThree.textContent).toBe(
      apiResponse.daily[3].temp?.max.toString(),
    );

    expect(forecastDayHighTempElFour.textContent).toBe(
      apiResponse.daily[4].temp?.max.toString(),
    );

    expect(forecastDayHighTempElFive.textContent).toBe(
      apiResponse.daily[5].temp?.max.toString(),
    );

    expect(forecastDayHighTempElSixes.length).toBe(0);
  });
});
