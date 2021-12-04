import classNames from 'classnames';

import { formatDay, formatShortDate } from 'core';
import { useCurrentWeatherTheme } from 'hooks';
import { WeatherForecastDay } from 'models';

import { WeatherIcon } from '../WeatherIcon/WeatherIcon';

import style from './ForecastDay.module.scss';

interface ForecastDayProps {
  day?: WeatherForecastDay;
}

export const ForecastDay = ({ day }: ForecastDayProps): JSX.Element | null => {
  if (!day) {
    return null;
  }

  const { isDarkMode } = useCurrentWeatherTheme();
  const dayName = formatDay(day.date);
  const shortDate = formatShortDate(day.date);

  let classes = classNames({
    [style.row]: true,
    [style.darkMode]: isDarkMode,
  });

  return (
    <div className={classes}>
      <div className={style.date}>
        <div data-testid="forecast-day-name">{dayName}</div>
        <div data-testid="forecast-day-date" className={style.label}>
          {shortDate}
        </div>
      </div>
      <div className={style.icon}>
        <WeatherIcon weatherId={day.weatherId} />
      </div>
      <div className={style.low}>
        <div data-testid="forecast-day-lowTemp">{day.lowTemp}&deg;</div>
        <div className={style.label}>Low</div>
      </div>
      <div className={style.high}>
        <div data-testid="forecast-day-highTemp">{day.highTemp}&deg;</div>
        <div className={style.label}>High</div>
      </div>
      <div className={style.rain}>
        <div data-testid="forecast-rain-percentage">{day.rainPercentage}%</div>
        <div className={style.label}>Rain</div>
      </div>
      <div className={style.wind}>
        <div data-testid="forecast-day-windSpeed">{day.windSpeed}km/h</div>
        <div className={style.label}>Wind</div>
      </div>
    </div>
  );
};
