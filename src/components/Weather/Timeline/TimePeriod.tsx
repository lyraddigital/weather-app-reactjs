import classNames from 'classnames';

import { formatShortHour, isCurrentTimeNight } from 'core';
import { useCurrentWeatherTheme } from 'hooks';
import { WeatherTimelinePeriod } from 'models';

import { WeatherIcon } from '../WeatherIcon/WeatherIcon';

import style from './TimePeriod.module.scss';

interface TimePeriodProps {
  period: WeatherTimelinePeriod;
}

export const TimePeriod = ({ period }: TimePeriodProps): JSX.Element => {
  const { isDarkMode } = useCurrentWeatherTheme();
  const formattedTime = formatShortHour(period.time);
  const isNightTime = isCurrentTimeNight(period.time);

  let classes = classNames({
    [style.item]: true,
    [style.darkMode]: isDarkMode,
  });

  return (
    <div className={classes}>
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
