import { getWeatherDescription } from 'core';

import { WeatherIcon } from '../WeatherIcon/WeatherIcon';

import style from './CurrentTemperature.module.scss';

interface CurrentTemperatureProps {
  temp?: number;
  weatherId?: number;
  isNightTime?: boolean;
}

export const CurrentTemperature = (
  props: CurrentTemperatureProps,
): JSX.Element => {
  const { temp, weatherId, isNightTime } = props;
  const weatherSummary = getWeatherDescription(weatherId);

  return (
    <div className={style.currentTemperature}>
      <div className={style.iconContainer}>
        <WeatherIcon
          weatherId={weatherId}
          className={style.icon}
          isNightTime={isNightTime}
        />
      </div>
      <div className={style.contentContainer}>
        <div data-testid="current-weather-temp" className={style.value}>
          {temp}&deg;
        </div>
        <div data-testid="current-weather-summary" className={style.summary}>
          {weatherSummary}
        </div>
      </div>
    </div>
  );
};
