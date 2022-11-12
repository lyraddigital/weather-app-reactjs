import classNames from 'classnames';

import { formatDay, formatShortDate } from 'core';
import { useCurrentWeatherTheme } from 'hooks';
import { WeatherForecastDay } from 'models';

import { WeatherIcon } from '../WeatherIcon';

import style from './ForecastDay.module.scss';

interface ForecastDayProps {
  day?: WeatherForecastDay;
}

export const ForecastDay = ({ day }: ForecastDayProps): JSX.Element | null => {
  const { isDarkMode } = useCurrentWeatherTheme();

  if (!day) {
    return null;
  }

  const dayName = formatDay(day.date);
  const shortDate = formatShortDate(day.date);

  const classes = classNames({
    [style.row]: true,
    [style.darkMode]: isDarkMode,
  });

  const iconClasses = classNames({
    [style.fieldValue]: true,
    [style.icon]: true,
  });

  return (
    <div className={classes}>
      <div className={style.fieldValue}>
        <div>{dayName}</div>
        <div className={style.label}>{shortDate}</div>
      </div>
      <div className={iconClasses}>
        <WeatherIcon weatherId={day.weatherId} />
      </div>
      <div className={style.fieldValue}>
        <div>{day.lowTemp}&deg;</div>
        <div className={style.label}>Low</div>
      </div>
      <div className={style.fieldValue}>
        <div>{day.highTemp}&deg;</div>
        <div className={style.label}>High</div>
      </div>
      <div className={style.fieldValue}>
        <div>{day.rainPercentage}%</div>
        <div className={style.label}>Rain</div>
      </div>
      <div className={style.fieldValue}>
        <div>{day.windSpeed}km/h</div>
        <div className={style.label}>Wind</div>
      </div>
    </div>
  );
};
