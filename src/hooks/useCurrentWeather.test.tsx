import { render, screen } from '@testing-library/react';
import { getUnixTime } from 'date-fns';

import { formatTime } from 'testing';
import { WeatherContext } from 'context';
import { useCurrentWeather } from 'hooks';

const TempChild = () => {
  const currentWeather = useCurrentWeather();

  const forecastDayEls = currentWeather.forecast.map((fd, i) => (
    <div key={`forecast-day-${i}`}>
      <div data-testid={`forecast-day-date-${i}`}>{formatTime(fd.date)}</div>
      <div data-testid={`forecast-day-highTemp-${i}`}>{fd.highTemp}</div>
      <div data-testid={`forecast-day-lowTemp-${i}`}>{fd.lowTemp}</div>
      <div data-testid={`forecast-day-weatherId-${i}`}>{fd.weatherId}</div>
      <div data-testid={`forecast-day-rainPercentage-${i}`}>
        {fd.rainPercentage}
      </div>
      <div data-testid={`forecast-day-windSpeed-${i}`}>{fd.windSpeed}</div>
    </div>
  ));

  const timelinePeriodEls = currentWeather.timeline.map((tp, i) => (
    <div key={`timeline-period-${i}`}>
      <div data-testid={`timeline-period-time-${i}`}>{formatTime(tp.time)}</div>
      <div data-testid={`timeline-period-temp-${i}`}>{tp.temp}</div>
      <div data-testid={`timeline-period-weatherId-${i}`}>{tp.weatherId}</div>
    </div>
  ));

  return (
    <div>
      <div data-testid="weather-current-temp">{currentWeather.currentTemp}</div>
      <div data-testid="weather-id">{currentWeather.weatherId}</div>
      <div data-testid="weather-statistics-highTemp">
        {currentWeather.statistics.highTemp}
      </div>
      <div data-testid="weather-statistics-lowTemp">
        {currentWeather.statistics.lowTemp}
      </div>
      <div data-testid="weather-statistics-windSpeed">
        {currentWeather.statistics.windSpeed}
      </div>
      <div data-testid="weather-statistics-rainPercentage">
        {currentWeather.statistics.rainPercentage}
      </div>
      <div data-testid="weather-statistics-sunriseTime">
        {formatTime(currentWeather.statistics.sunriseTime)}
      </div>
      <div data-testid="weather-statistics-sunsetTime">
        {formatTime(currentWeather.statistics.sunsetTime)}
      </div>
      <div data-testid="weather-statistics-localTime">
        {formatTime(currentWeather.statistics.localTime)}
      </div>
      {forecastDayEls}
      {timelinePeriodEls}
    </div>
  );
};

describe('useCurrentWeather', () => {
  it('Maps the api response correctly to the hook response object', () => {
    // Arrange
    const apiResponse = {
      current: {
        temp: 5,
        weather: [{ id: 800 }],
        wind_speed: 30,
        humidity: 20,
        sunrise: getUnixTime(Date.UTC(2021, 10, 27, 7, 30, 0)),
        sunset: getUnixTime(Date.UTC(2021, 10, 27, 20, 0, 0)),
        dt: getUnixTime(Date.UTC(2021, 10, 27, 10, 0, 0)),
      },
      daily: [
        {
          dt: getUnixTime(Date.UTC(2021, 10, 28, 20, 0, 0)),
          temp: { min: 2, max: 10 },
          humidity: 20,
          wind_speed: 30,
          weather: [{ id: 801 }],
        },
        {
          dt: getUnixTime(Date.UTC(2021, 10, 29, 20, 0, 0)),
          temp: { min: 20, max: 30 },
          humidity: 67,
          wind_speed: 10,
          weather: [{ id: 800 }],
        },
      ],
      hourly: [
        {
          weather: [{ id: 800 }],
          temp: 25,
          dt: getUnixTime(Date.UTC(2021, 10, 27, 9, 0, 0)),
        },
        {
          weather: [{ id: 800 }],
          temp: 27,
          dt: getUnixTime(Date.UTC(2021, 10, 27, 10, 0, 0)),
        },
      ],
      timezone: 'Australia/Sydney',
    };

    // Action
    render(
      <WeatherContext.Provider
        value={{ data: apiResponse, isFirstLoad: false, isLoading: true }}
      >
        <TempChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const currentTempEl = screen.getByTestId('weather-current-temp');
    const weatherIdEl = screen.getByTestId('weather-id');
    const statisticsHighTempEl = screen.getByTestId(
      'weather-statistics-highTemp',
    );
    const statisticsLowTempEl = screen.getByTestId(
      'weather-statistics-lowTemp',
    );
    const statisticsWindSpeedEl = screen.getByTestId(
      'weather-statistics-windSpeed',
    );
    const statisticsRainPercentageEl = screen.getByTestId(
      'weather-statistics-rainPercentage',
    );
    const statisticsSunriseTimeEl = screen.getByTestId(
      'weather-statistics-sunriseTime',
    );
    const statisticsSunsetTimeEl = screen.getByTestId(
      'weather-statistics-sunsetTime',
    );
    const statisticsLocalTimeEl = screen.getByTestId(
      'weather-statistics-localTime',
    );
    const firstDayForecastDateEl = screen.getByTestId('forecast-day-date-0');
    const firstDayForecastHighTempEl = screen.getByTestId(
      'forecast-day-highTemp-0',
    );
    const firstDayForecastLowTempEl = screen.getByTestId(
      'forecast-day-lowTemp-0',
    );
    const firstDayForecastWeatherIdEl = screen.getByTestId(
      'forecast-day-weatherId-0',
    );
    const firstDayForecastRainPercentageEl = screen.getByTestId(
      'forecast-day-rainPercentage-0',
    );
    const firstDayForecastWindSpeedEl = screen.getByTestId(
      'forecast-day-windSpeed-0',
    );
    const secondDayForecastDateEl = screen.getByTestId('forecast-day-date-1');
    const secondDayForecastHighTempEl = screen.getByTestId(
      'forecast-day-highTemp-1',
    );
    const secondDayForecastLowTempEl = screen.getByTestId(
      'forecast-day-lowTemp-1',
    );
    const secondDayForecastWeatherIdEl = screen.getByTestId(
      'forecast-day-weatherId-1',
    );
    const secondDayForecastRainPercentageEl = screen.getByTestId(
      'forecast-day-rainPercentage-1',
    );
    const secondDayForecastWindSpeedEl = screen.getByTestId(
      'forecast-day-windSpeed-1',
    );
    const firstTimePeriodWeatherIdEl = screen.getByTestId(
      'timeline-period-weatherId-0',
    );
    const firstTimePeriodTempEl = screen.getByTestId('timeline-period-temp-0');
    const firstTimePeriodTimeEl = screen.getByTestId('timeline-period-time-0');
    const secondTimePeriodWeatherIdEl = screen.getByTestId(
      'timeline-period-weatherId-1',
    );
    const secondTimePeriodTempEl = screen.getByTestId('timeline-period-temp-1');
    const secondTimePeriodTimeEl = screen.getByTestId('timeline-period-time-1');

    expect(currentTempEl.textContent).toBe(apiResponse.current.temp.toString());

    expect(weatherIdEl.textContent).toBe(
      apiResponse.current.weather[0].id.toString(),
    );

    expect(statisticsHighTempEl.textContent).toBe(
      apiResponse.daily[0].temp.max.toString(),
    );

    expect(statisticsLowTempEl.textContent).toBe(
      apiResponse.daily[0].temp.min.toString(),
    );

    expect(statisticsWindSpeedEl.textContent).toBe(
      apiResponse.current.wind_speed.toString(),
    );

    expect(statisticsRainPercentageEl.textContent).toBe(
      apiResponse.current.humidity.toString(),
    );

    expect(statisticsSunriseTimeEl.textContent).toBe('2021-11-27 18:30:00');
    expect(statisticsSunsetTimeEl.textContent).toBe('2021-11-28 07:00:00');
    expect(statisticsLocalTimeEl.textContent).toBe('2021-11-27 21:00:00');
    expect(firstDayForecastDateEl.textContent).toBe('2021-11-29 07:00:00');

    expect(firstDayForecastHighTempEl.textContent).toBe(
      apiResponse.daily[0].temp.max.toString(),
    );

    expect(firstDayForecastLowTempEl.textContent).toBe(
      apiResponse.daily[0].temp.min.toString(),
    );

    expect(firstDayForecastWeatherIdEl.textContent).toBe(
      apiResponse.daily[0].weather[0].id.toString(),
    );

    expect(firstDayForecastRainPercentageEl.textContent).toBe(
      apiResponse.daily[0].humidity.toString(),
    );

    expect(firstDayForecastWindSpeedEl.textContent).toBe(
      apiResponse.daily[0].wind_speed.toString(),
    );

    expect(secondDayForecastDateEl.textContent).toBe('2021-11-30 07:00:00');

    expect(secondDayForecastHighTempEl.textContent).toBe(
      apiResponse.daily[1].temp.max.toString(),
    );

    expect(secondDayForecastLowTempEl.textContent).toBe(
      apiResponse.daily[1].temp.min.toString(),
    );

    expect(secondDayForecastWeatherIdEl.textContent).toBe(
      apiResponse.daily[1].weather[0].id.toString(),
    );

    expect(secondDayForecastRainPercentageEl.textContent).toBe(
      apiResponse.daily[1].humidity.toString(),
    );

    expect(secondDayForecastWindSpeedEl.textContent).toBe(
      apiResponse.daily[1].wind_speed.toString(),
    );

    expect(firstTimePeriodWeatherIdEl.textContent).toBe(
      apiResponse.hourly[0].weather[0].id.toString(),
    );

    expect(firstTimePeriodTempEl.textContent).toBe(
      apiResponse.hourly[0].temp.toString(),
    );

    expect(firstTimePeriodTimeEl.textContent).toBe('2021-11-27 20:00:00');

    expect(secondTimePeriodWeatherIdEl.textContent).toBe(
      apiResponse.hourly[1].weather[0].id.toString(),
    );

    expect(secondTimePeriodTempEl.textContent).toBe(
      apiResponse.hourly[1].temp.toString(),
    );

    expect(secondTimePeriodTimeEl.textContent).toBe('2021-11-27 21:00:00');
  });

  it('Maps the api response correctly to the hook response when some data is missing', () => {
    // Arrange
    const apiResponse = {
      daily: [{}],
      hourly: [{}],
      timezone: 'Australia/Sydney',
    };

    // Action
    render(
      <WeatherContext.Provider
        value={{ data: apiResponse, isFirstLoad: false, isLoading: true }}
      >
        <TempChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const currentTempEl = screen.getByTestId('weather-current-temp');
    const weatherIdEl = screen.getByTestId('weather-id');
    const statisticsHighTempEl = screen.getByTestId(
      'weather-statistics-highTemp',
    );
    const statisticsLowTempEl = screen.getByTestId(
      'weather-statistics-lowTemp',
    );
    const statisticsWindSpeedEl = screen.getByTestId(
      'weather-statistics-windSpeed',
    );
    const statisticsRainPercentageEl = screen.getByTestId(
      'weather-statistics-rainPercentage',
    );
    const statisticsSunriseTimeEl = screen.getByTestId(
      'weather-statistics-sunriseTime',
    );
    const statisticsSunsetTimeEl = screen.getByTestId(
      'weather-statistics-sunsetTime',
    );
    const statisticsLocalTimeEl = screen.getByTestId(
      'weather-statistics-localTime',
    );
    const firstDayForecastDateEl = screen.getByTestId('forecast-day-date-0');
    const firstDayForecastHighTempEl = screen.getByTestId(
      'forecast-day-highTemp-0',
    );
    const firstDayForecastLowTempEl = screen.getByTestId(
      'forecast-day-lowTemp-0',
    );
    const firstDayForecastWeatherIdEl = screen.getByTestId(
      'forecast-day-weatherId-0',
    );
    const firstDayForecastRainPercentageEl = screen.getByTestId(
      'forecast-day-rainPercentage-0',
    );
    const firstDayForecastWindSpeedEl = screen.getByTestId(
      'forecast-day-windSpeed-0',
    );
    const firstTimePeriodWeatherIdEl = screen.getByTestId(
      'timeline-period-weatherId-0',
    );
    const firstTimePeriodTempEl = screen.getByTestId('timeline-period-temp-0');
    const firstTimePeriodTimeEl = screen.getByTestId('timeline-period-time-0');

    expect(currentTempEl.textContent).toBe('0');
    expect(weatherIdEl.textContent).toBe('0');
    expect(statisticsHighTempEl.textContent).toBe('0');
    expect(statisticsLowTempEl.textContent).toBe('0');
    expect(statisticsWindSpeedEl.textContent).toBe('0');
    expect(statisticsRainPercentageEl.textContent).toBe('0');
    expect(statisticsSunriseTimeEl.textContent).toBe('');
    expect(statisticsSunsetTimeEl.textContent).toBe('');
    expect(statisticsLocalTimeEl.textContent).toBe('');
    expect(firstDayForecastDateEl.textContent).toBe('');
    expect(firstDayForecastHighTempEl.textContent).toBe('0');
    expect(firstDayForecastLowTempEl.textContent).toBe('0');
    expect(firstDayForecastWeatherIdEl.textContent).toBe('0');
    expect(firstDayForecastRainPercentageEl.textContent).toBe('0');
    expect(firstDayForecastWindSpeedEl.textContent).toBe('0');
    expect(firstTimePeriodWeatherIdEl.textContent).toBe('0');
    expect(firstTimePeriodTempEl.textContent).toBe('0');
    expect(firstTimePeriodTimeEl.textContent).toBe('');
  });

  it('Maps the api response correctly to the hook response when an item in the daily and hourly is undefined or null', () => {
    // Arrange
    const apiResponse = {
      daily: [undefined],
      hourly: [undefined],
      timezone: 'Australia/Sydney',
    };

    // Action
    render(
      <WeatherContext.Provider
        value={{ data: apiResponse, isFirstLoad: false, isLoading: true }}
      >
        <TempChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const firstDayForecastDateEl = screen.getByTestId('forecast-day-date-0');
    const firstDayForecastHighTempEl = screen.getByTestId(
      'forecast-day-highTemp-0',
    );
    const firstDayForecastLowTempEl = screen.getByTestId(
      'forecast-day-lowTemp-0',
    );
    const firstDayForecastWeatherIdEl = screen.getByTestId(
      'forecast-day-weatherId-0',
    );
    const firstDayForecastRainPercentageEl = screen.getByTestId(
      'forecast-day-rainPercentage-0',
    );
    const firstDayForecastWindSpeedEl = screen.getByTestId(
      'forecast-day-windSpeed-0',
    );
    const firstTimePeriodWeatherIdEl = screen.getByTestId(
      'timeline-period-weatherId-0',
    );
    const firstTimePeriodTempEl = screen.getByTestId('timeline-period-temp-0');
    const firstTimePeriodTimeEl = screen.getByTestId('timeline-period-time-0');

    expect(firstDayForecastDateEl.textContent).toBe('');
    expect(firstDayForecastHighTempEl.textContent).toBe('0');
    expect(firstDayForecastLowTempEl.textContent).toBe('0');
    expect(firstDayForecastWeatherIdEl.textContent).toBe('0');
    expect(firstDayForecastRainPercentageEl.textContent).toBe('0');
    expect(firstDayForecastWindSpeedEl.textContent).toBe('0');
    expect(firstTimePeriodWeatherIdEl.textContent).toBe('0');
    expect(firstTimePeriodTempEl.textContent).toBe('0');
    expect(firstTimePeriodTimeEl.textContent).toBe('');
  });
});
