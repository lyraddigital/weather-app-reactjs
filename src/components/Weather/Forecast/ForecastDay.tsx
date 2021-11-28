import { formatDay, formatShortDate } from 'core';
import { WeatherForecastDay } from 'models';

import { WeatherIcon } from '../WeatherIcon/WeatherIcon';

import style from './ForecastDay.module.scss';

interface ForecastDayProps {
  day: WeatherForecastDay;
}

export const ForecastDay = ({ day }: ForecastDayProps): JSX.Element | null => {
  if (!day) {
    return null;
  }

  const dayName = formatDay(day.date);
  const shortDate = formatShortDate(day.date);

  return (
    <div className={style.row}>
      <div className={style.date}>
        {dayName}
        <div className={style.label}>{shortDate}</div>
      </div>
      <div className={style.icon}>
        <WeatherIcon weatherId={day.weatherId} />
      </div>
      <div className={style.low}>
        {day.lowTemp}&deg;
        <div className={style.label}>Low</div>
      </div>
      <div className={style.high}>
        {day.highTemp}&deg;
        <div className={style.label}>High</div>
      </div>
      <div className={style.rain}>
        {day.rainPercentage}%<div className={style.label}>Rain</div>
      </div>
      <div className={style.wind}>
        {day.windSpeed}mph
        <div className={style.label}>Wind</div>
      </div>
    </div>
  );
};
