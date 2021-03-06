import { render, screen } from '@testing-library/react';
import { getUnixTime } from 'date-fns';

import { formatTime } from 'testing';
import { useTimeline } from 'hooks';
import { WeatherContext } from 'context';
import {
  TimelinePeriodApiResponse,
  WeatherDetailsApiResponse,
  WeatherTimelinePeriod,
} from 'models';

const TempTimelineChild = () => {
  const timeline = useTimeline();

  const timelinePeriodEls = timeline.map(
    (p: WeatherTimelinePeriod, i: number) => (
      <div key={i}>
        <div data-testid={`timeline-period-temp-${i}`}>{p.temp}</div>
        <div data-testid={`timeline-period-time-${i}`}>
          {formatTime(p.time)}
        </div>
        <div data-testid={`timeline-period-weatherId-${i}`}>{p.weatherId}</div>
      </div>
    ),
  );

  return <div>{timelinePeriodEls}</div>;
};

const createTimePeriod = (
  index: number,
  weather?: WeatherDetailsApiResponse,
): TimelinePeriodApiResponse => {
  return {
    temp: index * 2,
    dt: getUnixTime(Date.UTC(2021, 10, 27)),
    weather: [weather || { id: index + 1 }],
  };
};

describe('useTimeline', () => {
  it('Returns a filtered timeline array when the ApiResponse is defined', () => {
    // Arrange
    const weather = { id: 1 };
    const apiResponse = {
      hourly: [
        createTimePeriod(0),
        createTimePeriod(1),
        createTimePeriod(2),
        createTimePeriod(3, weather),
      ],
      timezone: 'Australia/Sydney',
    };

    // Action
    render(
      <WeatherContext.Provider
        value={{ data: apiResponse, isFirstLoad: false, isLoading: true }}
      >
        <TempTimelineChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const timelineHourTempEl = screen.getByTestId(`timeline-period-temp-0`);
    const timelineHourDtEl = screen.getByTestId(`timeline-period-time-0`);
    const timelineHourWeatherIdEl = screen.getByTestId(
      `timeline-period-weatherId-0`,
    );

    expect(timelineHourTempEl.textContent).toBe(
      apiResponse.hourly[3].temp?.toString(),
    );

    expect(timelineHourDtEl.textContent).toBe('2021-11-27 11:00:00');
    expect(timelineHourWeatherIdEl.textContent).toBe(weather.id.toString());
  });

  it('Returns an empty timeline array when the ApiResponse is not defined', () => {
    // Arrange / Action
    render(
      <WeatherContext.Provider
        value={{ data: undefined, isFirstLoad: false, isLoading: true }}
      >
        <TempTimelineChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const timelineHourTempEls = screen.queryAllByTestId(
      `timeline-period-temp-0`,
    );

    expect(timelineHourTempEls.length).toBe(0);
  });

  it('Returns an empty Forecast array when the ApiResponse.hourly object is not defined', () => {
    // Arrange
    const apiResponse = {
      timezone: 'Australia/Sydney',
    };

    // Action
    render(
      <WeatherContext.Provider
        value={{ data: apiResponse, isFirstLoad: false, isLoading: true }}
      >
        <TempTimelineChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const timelineHourTempEls = screen.queryAllByTestId(
      `timeline-period-temp-0`,
    );

    expect(timelineHourTempEls.length).toBe(0);
  });

  it('Returns a maximum of 6 timelines starting from the second record to the 19th skipping every 3 hours', () => {
    // Arrange
    const hourly = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24,
    ].map((i: number) => createTimePeriod(i));
    const apiResponse = {
      hourly,
      timezone: 'Australia/Sydney',
    };

    // Action
    render(
      <WeatherContext.Provider
        value={{ data: apiResponse, isFirstLoad: false, isLoading: true }}
      >
        <TempTimelineChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const timelinePeriodTempElOne = screen.getByTestId(
      `timeline-period-temp-0`,
    );
    const timelinePeriodTempElTwo = screen.getByTestId(
      `timeline-period-temp-1`,
    );
    const timelinePeriodTempElThree = screen.getByTestId(
      `timeline-period-temp-2`,
    );
    const timelinePeriodTempElFour = screen.getByTestId(
      `timeline-period-temp-3`,
    );
    const timelinePeriodTempElFive = screen.getByTestId(
      `timeline-period-temp-4`,
    );
    const timelinePeriodTempElSix = screen.getByTestId(
      `timeline-period-temp-5`,
    );
    const timelinePeriodTempSevenEls = screen.queryAllByTestId(
      `timeline-period-temp-6`,
    );

    expect(timelinePeriodTempElOne.textContent).toBe(
      apiResponse.hourly[3].temp?.toString(),
    );

    expect(timelinePeriodTempElTwo.textContent).toBe(
      apiResponse.hourly[6].temp?.toString(),
    );

    expect(timelinePeriodTempElThree.textContent).toBe(
      apiResponse.hourly[9].temp?.toString(),
    );

    expect(timelinePeriodTempElFour.textContent).toBe(
      apiResponse.hourly[12].temp?.toString(),
    );

    expect(timelinePeriodTempElFive.textContent).toBe(
      apiResponse.hourly[15].temp?.toString(),
    );

    expect(timelinePeriodTempElSix.textContent).toBe(
      apiResponse.hourly[18].temp?.toString(),
    );

    expect(timelinePeriodTempSevenEls.length).toBe(0);
  });
});
