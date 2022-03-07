import classNames from 'classnames';

import { formatShortHour } from 'core';
import { useCurrentWeatherTheme } from 'hooks';
import { WeatherTimelinePeriod } from 'models';

import { WeatherIcon } from '../WeatherIcon';

import style from './TimePeriod.module.scss';

interface TimePeriodProps {
  period: WeatherTimelinePeriod;
}

export const TimePeriod = ({ period }: TimePeriodProps): JSX.Element => {
  const { isDarkMode } = useCurrentWeatherTheme();
  const formattedTime = formatShortHour(period.time);

  const classes = classNames({
    [style.item]: true,
    [style.darkMode]: isDarkMode,
  });

  return (
    <div className={classes}>
      <div className={style.hour}>{formattedTime}</div>
      <div className={style.timePeriodIcon}>
        <WeatherIcon weatherId={period.weatherId} />
      </div>
      <div>{period.temp}&deg;</div>
    </div>
  );
};
