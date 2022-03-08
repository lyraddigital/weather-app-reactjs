import { render, RenderResult } from '@testing-library/react';
import { getUnixTime, setHours } from 'date-fns';

import { WeatherContext } from 'context';
import { WeatherApiResponse } from 'models';

import { WeatherIcon } from './WeatherIcon';

const renderWeatherIcon = (
  weatherId: number,
  localTime: Date,
): RenderResult => {
  const sunriseTime = setHours(localTime, 6);
  const sunsetTime = setHours(localTime, 20);

  const apiResponse: WeatherApiResponse = {
    current: {
      dt: getUnixTime(localTime),
      sunrise: getUnixTime(sunriseTime),
      sunset: getUnixTime(sunsetTime),
    },
  };

  return render(
    <WeatherContext.Provider
      value={{ data: apiResponse, isLoading: false, isFirstLoad: false }}
    >
      <WeatherIcon weatherId={weatherId} />
    </WeatherContext.Provider>,
  );
};

describe('WeatherIcon', () => {
  it('Returns null if weatherId is not a valid value', () => {
    // Arrange
    const weatherId = -1;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const { container } = renderWeatherIcon(weatherId, localTime);

    // Assert
    const imgElement = container.querySelector('svg');

    expect(imgElement).toBeFalsy();
  });

  it('Image src and alt is correct when weatherId an Atmospheric one', () => {
    // Arrange
    const weatherId = 701;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const { container } = renderWeatherIcon(weatherId, localTime);

    // Assert
    const atmosphereSvgEl = container.querySelector('#atmosphere-icon');

    expect(atmosphereSvgEl).toBeTruthy();
  });

  it('Image src and alt is correct when weatherId is a Clear one', () => {
    // Arrange
    const weatherId = 800;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const { container } = renderWeatherIcon(weatherId, localTime);

    // Assert
    const clearSvgEl = container.querySelector('#clear-icon');

    expect(clearSvgEl).toBeTruthy();
  });

  it('Image src is correct when weatherId is a Clouds one', () => {
    // Arrange
    const weatherId = 801;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const { container } = renderWeatherIcon(weatherId, localTime);

    // Assert
    const cloudsSvgEl = container.querySelector('#clouds-icon');

    expect(cloudsSvgEl).toBeTruthy();
  });

  it('Image src is correct when weatherId is a Drizzle one', () => {
    // Arrange
    const weatherId = 301;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const { container } = renderWeatherIcon(weatherId, localTime);

    // Assert
    const drizzlingSvgEl = container.querySelector('#drizzling-icon');

    expect(drizzlingSvgEl).toBeTruthy();
  });

  it('Image src is correct when weatherId is Rain one', () => {
    // Arrange
    const weatherId = 502;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const { container } = renderWeatherIcon(weatherId, localTime);

    // Assert
    const rainSvgEl = container.querySelector('#rain-icon');

    expect(rainSvgEl).toBeTruthy();
  });

  it('Image src is correct when weatherId is a Shower one', () => {
    // Arrange
    const weatherId = 520;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const { container } = renderWeatherIcon(weatherId, localTime);

    // Assert
    const showerSvgEl = container.querySelector('#shower-icon');

    expect(showerSvgEl).toBeTruthy();
  });

  it('Image src is correct when weatherId is a Snow one', () => {
    // Arrange
    const weatherId = 602;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const { container } = renderWeatherIcon(weatherId, localTime);

    // Assert
    const snowSvgEl = container.querySelector('#snow-icon');

    expect(snowSvgEl).toBeTruthy();
  });

  it('Image src is correct when weatherId is Thunderstorm one', () => {
    // Arrange
    const weatherId = 201;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const { container } = renderWeatherIcon(weatherId, localTime);

    // Assert
    const thunderSvgEl = container.querySelector('#thunder-icon');

    expect(thunderSvgEl).toBeTruthy();
  });

  it('Img src is correct if the weatherId is Clear, but it is night time', () => {
    // Arrange
    const weatherId = 800;
    const localTime = new Date(2022, 3, 14, 22);

    // Action
    renderWeatherIcon(weatherId, localTime);

    // Action
    const { container } = renderWeatherIcon(weatherId, localTime);

    // Assert
    const clearNightSvgEl = container.querySelector('#clear-night');

    expect(clearNightSvgEl).toBeTruthy();
  });

  it('Img src is correct if the weatherId is a Cloudy one, but it is night time', () => {
    // Arrange
    const weatherId = 801;
    const localTime = new Date(2022, 3, 14, 22);

    // Action
    const { container } = renderWeatherIcon(weatherId, localTime);

    // Assert
    const cloudyNightSvgEl = container.querySelector('#cloudy-night');

    expect(cloudyNightSvgEl).toBeTruthy();
  });
});
