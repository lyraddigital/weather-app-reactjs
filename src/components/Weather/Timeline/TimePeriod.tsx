import { formatShortHour } from 'core';
import { WeatherTimelinePeriod } from 'models';

import { WeatherIcon } from '../WeatherIcon/WeatherIcon';

import style from './TimePeriod.module.scss';

interface TimePeriodProps {
  period: WeatherTimelinePeriod;
}

export const TimePeriod = ({ period }: TimePeriodProps): JSX.Element => {
  const formattedTime = formatShortHour(period.time);

  return (
    <div className={style.item}>
      <div className={style.hour}>{formattedTime}</div>
      <WeatherIcon
        weatherId={period.weatherId}
        className={style.timePeriodIcon}
      />
      <div>{period.temp}&deg;</div>
    </div>
  );
};
