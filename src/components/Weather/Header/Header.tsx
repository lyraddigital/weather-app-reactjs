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
      <h1 className={style.location}>
        {location?.city}, {location?.country}
      </h1>
      <div>{formattedDate}</div>
      <div>Last updated at {formattedTime}</div>
    </div>
  );
};
