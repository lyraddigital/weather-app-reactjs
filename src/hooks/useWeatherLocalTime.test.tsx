import { render } from '@testing-library/react';
import { getUnixTime } from 'date-fns';

import { convertEpochSecondsToDate } from 'core';
import { WeatherContext } from 'context';
import { useWeatherLocalTime } from 'hooks';
import { WeatherApiResponse } from 'models';

const TempLocalTimeChild = () => {
  const localTime = useWeatherLocalTime();
  return <div data-testid="local-time">{localTime?.toString()}</div>;
};

describe('useWeatherLocalTime', () => {
  it('Will eventually test something', () => {});
  // it('Returns the correct format for the local time based on the current time in the Weather api.', async () => {
  //   // Arrange
  //   const apiResponse: WeatherApiResponse = {
  //     timezone: 'Australia/Sydney',
  //     current: {
  //       dt: getUnixTime(Date.UTC(2021, 10, 27)),
  //     },
  //   };
  //   // Action
  //   const wrapper = render(
  //     <WeatherContext.Provider value={apiResponse}>
  //       <TempLocalTimeChild />
  //     </WeatherContext.Provider>,
  //   );
  // Assert
  //const localTimeEl = await wrapper.getByTestId('local-time');
  // expect(localTimeEl.textContent).toBe(
  //   convertEpochSecondsToDate(
  //     apiResponse.current?.dt,
  //     apiResponse.timezone,
  //   ).toString(),
  // );
  //});
  // it('Returns empty for the local time based on an undefined api response.', async () => {
  //   // Arrange / Action
  //   const wrapper = render(
  //     <WeatherContext.Provider value={undefined}>
  //       <TempLocalTimeChild />
  //     </WeatherContext.Provider>,
  //   );
  //   // Assert
  //   const localTimeEl = await wrapper.getByTestId('local-time');
  //   expect(localTimeEl.textContent).toBe('');
  // });
});
