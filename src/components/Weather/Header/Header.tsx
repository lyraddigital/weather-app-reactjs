import { formatFriendlyDate, formatFriendlyTime } from 'core';
import { useLocation, useWeatherLocalTime } from 'hooks';

import style from './Header.module.scss';

export const Header = (): JSX.Element => {
  const location = useLocation();
  const localTime = useWeatherLocalTime();
  const formattedDate = formatFriendlyDate(localTime);
  const formattedTime = formatFriendlyTime(localTime);

  return (
    <div className={style.locationAndDate}>
      <h1 className={style.location} data-testid="weather-heading">
        <span data-testid="weather-heading-city">{location?.city}</span>, <span data-testid="weather-heading-country">{location?.country}</span>
      </h1>
      <div data-testid="weather-updated-date">{formattedDate}</div>
      <div data-testid="weather-updated-time-message">Last updated at <span data-testid="weather-updated-time">{formattedTime}</span></div>
    </div>
  );
};
