import { WeatherType } from 'core';
import { WeatherTimelinePeriod } from 'models';
import { WeatherIcon } from '../WeatherIcon/WeatherIcon';

import style from './TimePeriod.module.scss';

interface TimePeriodProps {
  period: WeatherTimelinePeriod;
}

export const TimePeriod = ({ period }: TimePeriodProps): JSX.Element => {
  const imgAlt = `icons/${
    period.weather === 0 ? 'sunny.svg' : 'mostly-sunny.svg'
  }`;

  return (
    <div className={style.item}>
      <div className={style.hour}>{period.time}</div>
      <WeatherIcon weatherType={WeatherType.Clear} iconAlt={imgAlt} />
      <div>{period.temp}&deg;</div>
    </div>
  );
};
