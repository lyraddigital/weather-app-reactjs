import { render } from '@testing-library/react';
import { getUnixTime } from 'date-fns';

import { useForecast } from 'hooks';
import { WeatherContext } from 'context';
import {
  DailyForecastApiResponse,
  WeatherApiResponse,
  WeatherForecastDay,
} from 'models';

const TempForecastChild = () => {
  const forecast = useForecast();

  const forecastDayEls = forecast.map((f: WeatherForecastDay, i: number) => (
    <div key={i}>
      <div data-testid={`forecast-day-dt-${i}`}>{f.date?.toString()}</div>
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

const createDailyForecast = (index: number): DailyForecastApiResponse => {
  return {
    dt: getUnixTime(Date.UTC(2021, 10, 27)),
    humidity: 3 * index,
    wind_speed: 6 * index,
    weather: [{ id: 1 }],
    temp: {
      min: 1 * index,
      max: 2 * index,
    },
  };
};

describe('useForecast', () => {
  it('Returns a Forecast array when the ApiResponse is defined', async () => {
    // Arrange
    const apiResponse: WeatherApiResponse = {
      daily: [createDailyForecast(0), createDailyForecast(1)],
      timezone: 'Australia/Sydney',
    };

    // Action
    const wrapper = render(
      <WeatherContext.Provider value={apiResponse}>
        <TempForecastChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const forecastDayDtEl = await wrapper.findByTestId(`forecast-day-dt-0`);
    const forecastDayHighTempEl = await wrapper.findByTestId(
      `forecast-day-high-temp-0`,
    );
    const forecastDayLowTempEl = await wrapper.findByTestId(
      `forecast-day-low-temp-0`,
    );
    const forecastDayRainPercentageEl = await wrapper.findByTestId(
      `forecast-day-rain-percentage-0`,
    );
    const forecastDayWeatherIdEl = await wrapper.findByTestId(
      `forecast-day-weather-id-0`,
    );
    const forecastDayWindSpeedEl = await wrapper.findByTestId(
      `forecast-day-wind-speed-0`,
    );

    expect(forecastDayDtEl.textContent).toBe(
      'Sat Nov 27 2021 11:00:00 GMT+1100 (Australian Eastern Daylight Time)',
    );
    expect(forecastDayHighTempEl.textContent).toBe(
      apiResponse.daily![1]!.temp!.max.toString(),
    );
    expect(forecastDayLowTempEl.textContent).toBe(
      apiResponse.daily![1]!.temp!.min.toString(),
    );
    expect(forecastDayRainPercentageEl.textContent).toBe(
      apiResponse.daily![1]!.humidity!.toString(),
    );
    expect(forecastDayWeatherIdEl.textContent).toBe(
      apiResponse.daily![1]!.weather![0].id.toString(),
    );
    expect(forecastDayWindSpeedEl.textContent).toBe(
      apiResponse.daily![1]!.wind_speed!.toString(),
    );
  });

  it('Returns an empty Forecast array when the ApiResponse is not defined', async () => {
    // Arrange
    const apiResponse: WeatherApiResponse = {
      timezone: 'Australia/Sydney',
    };

    // Action
    const wrapper = render(
      <WeatherContext.Provider value={apiResponse}>
        <TempForecastChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const forecastDayDtEls = await wrapper.queryAllByTestId(
      `forecast-day-dt-0`,
    );

    expect(forecastDayDtEls.length).toBe(0);
  });

  it('Returns an empty Forecast array when the ApiResponse.daily object is not defined', async () => {
    // Arrange / Action
    const wrapper = render(
      <WeatherContext.Provider value={undefined}>
        <TempForecastChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const forecastDayDtEls = await wrapper.queryAllByTestId(
      `forecast-day-dt-0`,
    );

    expect(forecastDayDtEls.length).toBe(0);
  });

  it('Returns a maximum of 5 forecasts starting from the second record to the 6th', async () => {
    // Arrange
    const daily = [0, 1, 2, 3, 4, 5, 6].map((i: number) =>
      createDailyForecast(i),
    );
    const apiResponse: WeatherApiResponse = {
      daily,
      timezone: 'Australia/Sydney',
    };

    // Action
    const wrapper = render(
      <WeatherContext.Provider value={apiResponse}>
        <TempForecastChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const forecastDayHighTempElOne = await wrapper.findByTestId(
      `forecast-day-high-temp-0`,
    );
    const forecastDayHighTempElTwo = await wrapper.findByTestId(
      `forecast-day-high-temp-1`,
    );
    const forecastDayHighTempElThree = await wrapper.findByTestId(
      `forecast-day-high-temp-2`,
    );
    const forecastDayHighTempElFour = await wrapper.findByTestId(
      `forecast-day-high-temp-3`,
    );
    const forecastDayHighTempElFive = await wrapper.findByTestId(
      `forecast-day-high-temp-4`,
    );
    const forecastDayHighTempElSixes = await wrapper.queryAllByTestId(
      `forecast-day-high-temp-5`,
    );

    expect(forecastDayHighTempElOne.textContent).toBe(
      apiResponse.daily![1]!.temp!.max.toString(),
    );
    expect(forecastDayHighTempElTwo.textContent).toBe(
      apiResponse.daily![2]!.temp!.max.toString(),
    );
    expect(forecastDayHighTempElThree.textContent).toBe(
      apiResponse.daily![3]!.temp!.max.toString(),
    );
    expect(forecastDayHighTempElFour.textContent).toBe(
      apiResponse.daily![4]!.temp!.max.toString(),
    );
    expect(forecastDayHighTempElFive.textContent).toBe(
      apiResponse.daily![5]!.temp!.max.toString(),
    );
    expect(forecastDayHighTempElSixes.length).toBe(0);
  });
});
