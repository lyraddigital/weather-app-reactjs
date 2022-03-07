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
    const imgElement = container.querySelector('img');

    expect(imgElement).toBeFalsy();
  });

  // TODO: Ensure we write the bug fixes for the below
  // it('Image src and alt is correct when weatherId an Atmospheric one', () => {
  //   // Arrange
  //   const weatherId = 701;
  //   const localTime = new Date(2022, 3, 14, 12);

  //   // Action
  //   renderWeatherIcon(weatherId, localTime);

  //   // Assert
  //   const imgElement = screen.getByAltText('Misty') as HTMLImageElement;

  //   expect(imgElement.src).toBe('http://localhost/atmosphere.svg');
  // });

  // it('Image src and alt is correct when weatherId is a Clear one', () => {
  //   // Arrange
  //   const weatherId = 800;
  //   const localTime = new Date(2022, 3, 14, 12);

  //   // Action
  //   renderWeatherIcon(weatherId, localTime);

  //   // Assert
  //   const imgElement = screen.getByAltText('Clear') as HTMLImageElement;

  //   expect(imgElement.src).toBe('http://localhost/clear.svg');
  // });

  // it('Image src is correct when weatherId is a Clouds one', () => {
  //   // Arrange
  //   const weatherId = 801;
  //   const localTime = new Date(2022, 3, 14, 12);

  //   // Action
  //   renderWeatherIcon(weatherId, localTime);

  //   // Assert
  //   const imgElement = screen.getByAltText('Few clouds') as HTMLImageElement;

  //   expect(imgElement.src).toBe('http://localhost/cloudy.svg');
  // });

  // it('Image src is correct when weatherId is a Drizzle one', () => {
  //   // Arrange
  //   const weatherId = 301;
  //   const localTime = new Date(2022, 3, 14, 12);

  //   // Action
  //   renderWeatherIcon(weatherId, localTime);

  //   // Assert
  //   const imgElement = screen.getByAltText('Drizzle') as HTMLImageElement;

  //   expect(imgElement.src).toBe('http://localhost/drizzle.svg');
  // });

  // it('Image src is correct when weatherId is Rain one', () => {
  //   // Arrange
  //   const weatherId = 502;
  //   const localTime = new Date(2022, 3, 14, 12);

  //   // Action
  //   renderWeatherIcon(weatherId, localTime);

  //   // Assert
  //   const imgElement = screen.getByAltText('Heavy rain') as HTMLImageElement;

  //   expect(imgElement.src).toBe('http://localhost/rain.svg');
  // });

  // it('Image src is correct when weatherId is a Shower one', () => {
  //   // Arrange
  //   const weatherId = 520;
  //   const localTime = new Date(2022, 3, 14, 12);

  //   // Action
  //   renderWeatherIcon(weatherId, localTime);

  //   // Assert
  //   const imgElement = screen.getByAltText('Light rain') as HTMLImageElement;

  //   expect(imgElement.src).toBe('http://localhost/shower.svg');
  // });

  // it('Image src is correct when weatherId is a Snow one', () => {
  //   // Arrange
  //   const weatherId = 602;
  //   const localTime = new Date(2022, 3, 14, 12);

  //   // Action
  //   renderWeatherIcon(weatherId, localTime);

  //   // Assert
  //   const imgElement = screen.getByAltText('Heavy snow') as HTMLImageElement;

  //   expect(imgElement.src).toBe('http://localhost/snow.svg');
  // });

  // it('Image src is correct when weatherId is Thunderstorm one', () => {
  //   // Arrange
  //   const weatherId = 201;
  //   const localTime = new Date(2022, 3, 14, 12);

  //   // Action
  //   renderWeatherIcon(weatherId, localTime);

  //   // Assert
  //   const imgElement = screen.getByAltText(
  //     'Rain and thunderstorms',
  //   ) as HTMLImageElement;

  //   expect(imgElement.src).toBe('http://localhost/thunder-storm.svg');
  // });

  // it('Img src is correct if the weatherId is Clear, but it is night time', () => {
  //   // Arrange
  //   const weatherId = 800;
  //   const localTime = new Date(2022, 3, 14, 22);

  //   // Action
  //   renderWeatherIcon(weatherId, localTime);

  //   // Assert
  //   const imgElement = screen.getByAltText('Clear') as HTMLImageElement;

  //   expect(imgElement.src).toBe('http://localhost/clear-night.svg');
  // });

  // it('Img src is correct if the weatherId is a Cloudy one, but it is night time', () => {
  //   // Arrange
  //   const weatherId = 801;
  //   const localTime = new Date(2022, 3, 14, 22);

  //   // Action
  //   renderWeatherIcon(weatherId, localTime);

  //   // Assert
  //   const imgElement = screen.getByAltText('Few clouds') as HTMLImageElement;

  //   expect(imgElement.src).toBe('http://localhost/cloudy-night.svg');
  // });
});
