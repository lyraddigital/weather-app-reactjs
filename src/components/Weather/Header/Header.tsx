import { Link } from 'react-router-dom';

import { formatFriendlyDate, formatFriendlyTime } from 'core';
import { useLocation, useWeatherLocalTime } from 'hooks';

import style from './Header.module.scss';

export const Header = (): JSX.Element => {
  const location = useLocation();
  const localTime = useWeatherLocalTime();
  const formattedDate = formatFriendlyDate(localTime);
  const formattedTime = formatFriendlyTime(localTime);

  const lastUpdatedEl = formattedDate ? (
    <>
      <div>{formattedDate}</div>
      <div>Last updated at {formattedTime}</div>
    </>
  ) : null;

  return (
    <div className={style.header}>
      <div>
        <h1 className={style.location}>
          <span>{location?.city}</span>, <span>{location?.country}</span>
        </h1>
        {lastUpdatedEl}
      </div>
      <div className={style.changeLocation}>
        <Link to="/set-location">Change location</Link>
      </div>
    </div>
  );
};
