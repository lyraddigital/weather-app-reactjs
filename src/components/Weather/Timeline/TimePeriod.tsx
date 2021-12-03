import { formatShortHour, isCurrentTimeNight } from 'core';
import { WeatherTimelinePeriod } from 'models';

import { WeatherIcon } from '../WeatherIcon/WeatherIcon';

import style from './TimePeriod.module.scss';

interface TimePeriodProps {
  period: WeatherTimelinePeriod;
}

export const TimePeriod = ({ period }: TimePeriodProps): JSX.Element => {
  const formattedTime = formatShortHour(period.time);
  const isNightTime = isCurrentTimeNight(period.time);

  return (
    <div className={style.item}>
      <div className={style.hour} data-testid="period-time">
        {formattedTime}
      </div>
      <WeatherIcon
        weatherId={period.weatherId}
        className={style.timePeriodIcon}
        isNightTime={isNightTime}
      />
      <div data-testid="period-temp">{period.temp}&deg;</div>
    </div>
  );
};
