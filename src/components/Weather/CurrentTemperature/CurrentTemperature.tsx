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
        <div className={style.icon}>
          <WeatherIcon weatherId={weatherId} />
        </div>
      </div>
      <div className={style.contentContainer}>
        <div className={style.value}>{temp}&deg;</div>
        <div className={style.summary}>{weatherSummary}</div>
      </div>
    </div>
  );
};
