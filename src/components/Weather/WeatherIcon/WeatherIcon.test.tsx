import { render, RenderResult, waitFor } from '@testing-library/react';
import { getUnixTime, setHours } from 'date-fns';

import { WeatherContext } from 'context';
import { WeatherApiResponse } from 'models';

import { WeatherIcon } from './WeatherIcon';

const renderWeatherIcon = async (
  weatherId: number,
  localTime: Date,
  className?: string,
): Promise<RenderResult> => {
  const sunriseTime = setHours(localTime, 6);
  const sunsetTime = setHours(localTime, 20);

  const apiResponse: WeatherApiResponse = {
    current: {
      dt: getUnixTime(localTime),
      sunrise: getUnixTime(sunriseTime),
      sunset: getUnixTime(sunsetTime),
    },
  };

  return waitFor(() =>
    render(
      <WeatherContext.Provider
        value={{ data: apiResponse, isLoading: false, isFirstLoad: false }}
      >
        <WeatherIcon weatherId={weatherId} className={className} />
      </WeatherContext.Provider>,
    ),
  );
};

describe('WeatherIcon', () => {
  it('Returns null if weatherId is not a valid value', async () => {
    // Arrange
    const weatherId = -1;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const wrapper = await renderWeatherIcon(weatherId, localTime);

    // Assert
    const imgElements = await wrapper.queryAllByTestId('weather-icon');

    expect(imgElements.length).toBe(0);
  });

  it('Image class is empty when className is not set', async () => {
    // Arrange
    const weatherId = 500;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const wrapper = await renderWeatherIcon(weatherId, localTime);

    // Assert
    const imgElement = (await wrapper.findByTestId(
      'weather-icon',
    )) as HTMLImageElement;

    expect(imgElement.className).toBe('');
  });

  it('Image class is not empty when className is set', async () => {
    // Arrange
    const weatherId = 500;
    const className = 'testClass';
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const wrapper = await renderWeatherIcon(weatherId, localTime, className);

    // Assert
    const imgElement = (await wrapper.findByTestId(
      'weather-icon',
    )) as HTMLImageElement;

    expect(imgElement.className).toBe(className);
  });

  it('Alt attribute is set correctly on img tag', async () => {
    // Arrange
    const weatherId = 500;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const wrapper = await renderWeatherIcon(weatherId, localTime);

    // Assert
    const imgElement = (await wrapper.findByTestId(
      'weather-icon',
    )) as HTMLImageElement;

    expect(imgElement).toBeTruthy();
    expect(imgElement.alt).toBe('Light rain');
  });

  it('Image src and alt is correct when weatherId an Atmospheric one', async () => {
    // Arrange
    const weatherId = 701;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const wrapper = await renderWeatherIcon(weatherId, localTime);

    // Assert
    const imgElement = (await wrapper.findByTestId(
      'weather-icon',
    )) as HTMLImageElement;

    expect(imgElement.alt).toBe('Misty');
    expect(imgElement.src).toBe('http://localhost/atmosphere.svg');
  });

  it('Image src and alt is correct when weatherId is a Clear one', async () => {
    // Arrange
    const weatherId = 800;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const wrapper = await renderWeatherIcon(weatherId, localTime);

    // Assert
    const imgElement = (await wrapper.findByTestId(
      'weather-icon',
    )) as HTMLImageElement;

    expect(imgElement.alt).toBe('Clear');
    expect(imgElement.src).toBe('http://localhost/clear.svg');
  });

  it('Image src is correct when weatherId is a Clouds one', async () => {
    // Arrange
    const weatherId = 801;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const wrapper = await renderWeatherIcon(weatherId, localTime);

    // Assert
    const imgElement = (await wrapper.findByTestId(
      'weather-icon',
    )) as HTMLImageElement;

    expect(imgElement.alt).toBe('Few clouds');
    expect(imgElement.src).toBe('http://localhost/cloudy.svg');
  });

  it('Image src is correct when weatherId is a Drizzle one', async () => {
    // Arrange
    const weatherId = 301;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const wrapper = await renderWeatherIcon(weatherId, localTime);

    // Assert
    const imgElement = (await wrapper.findByTestId(
      'weather-icon',
    )) as HTMLImageElement;

    expect(imgElement.alt).toBe('Drizzle');
    expect(imgElement.src).toBe('http://localhost/drizzle.svg');
  });

  it('Image src is correct when weatherId is Rain one', async () => {
    // Arrange
    const weatherId = 502;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const wrapper = await renderWeatherIcon(weatherId, localTime);

    // Assert
    const imgElement = (await wrapper.findByTestId(
      'weather-icon',
    )) as HTMLImageElement;

    expect(imgElement.alt).toBe('Heavy rain');
    expect(imgElement.src).toBe('http://localhost/rain.svg');
  });

  it('Image src is correct when weatherId is a Shower one', async () => {
    // Arrange
    const weatherId = 520;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const wrapper = await renderWeatherIcon(weatherId, localTime);

    // Assert
    const imgElement = (await wrapper.findByTestId(
      'weather-icon',
    )) as HTMLImageElement;

    expect(imgElement.alt).toBe('Light rain');
    expect(imgElement.src).toBe('http://localhost/shower.svg');
  });

  it('Image src is correct when weatherId is a Snow one', async () => {
    // Arrange
    const weatherId = 602;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const wrapper = await renderWeatherIcon(weatherId, localTime);

    // Assert
    const imgElement = (await wrapper.findByTestId(
      'weather-icon',
    )) as HTMLImageElement;

    expect(imgElement.alt).toBe('Heavy snow');
    expect(imgElement.src).toBe('http://localhost/snow.svg');
  });

  it('Image src is correct when weatherId is Thunderstorm one', async () => {
    // Arrange
    const weatherId = 201;
    const localTime = new Date(2022, 3, 14, 12);

    // Action
    const wrapper = await renderWeatherIcon(weatherId, localTime);

    // Assert
    const imgElement = (await wrapper.findByTestId(
      'weather-icon',
    )) as HTMLImageElement;

    expect(imgElement.alt).toBe('Rain and thunderstorms');
    expect(imgElement.src).toBe('http://localhost/thunder-storm.svg');
  });

  it('Img src is correct if the weatherId is Clear, but it is night time', async () => {
    // Arrange
    const weatherId = 800;
    const localTime = new Date(2022, 3, 14, 22);

    // Action
    const wrapper = await renderWeatherIcon(weatherId, localTime);

    // Assert
    const imgElement = (await wrapper.findByTestId(
      'weather-icon',
    )) as HTMLImageElement;

    expect(imgElement.src).toBe('http://localhost/clear-night.svg');
  });

  it('Img src is correct if the weatherId is a Cloudy one, but it is night time', async () => {
    // Arrange
    const weatherId = 801;
    const localTime = new Date(2022, 3, 14, 22);

    // Action
    const wrapper = await renderWeatherIcon(weatherId, localTime);

    // Assert
    const imgElement = (await wrapper.findByTestId(
      'weather-icon',
    )) as HTMLImageElement;

    expect(imgElement.src).toBe('http://localhost/cloudy-night.svg');
  });
});
