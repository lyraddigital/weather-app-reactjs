import { getWeatherDescription } from 'core';

import { WeatherIcon } from '../WeatherIcon/WeatherIcon';

import style from './CurrentTemperature.module.scss';

interface CurrentTemperatureProps {
  temp?: number;
  weatherId?: number;
}

export const CurrentTemperature = (
  props: CurrentTemperatureProps,
): JSX.Element => {
  const { temp, weatherId } = props;
  const weatherSummary = getWeatherDescription(weatherId);

  return (
    <div className={style.currentTemperature}>
      <div className={style.iconContainer}>
        <WeatherIcon weatherId={weatherId} className={style.icon} />
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
