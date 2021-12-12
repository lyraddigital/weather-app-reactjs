import { isCurrentTimeNight } from 'core';
import { useCurrentWeather } from 'hooks';

import { CurrentTemperature } from '../CurrentTemperature/CurrentTemperature';
import { Stats } from '../Stats/Stats';

import style from './CurrentWeather.module.scss';

export const CurrentWeather = (): JSX.Element => {
  const { currentTemp, weatherId, statistics } = useCurrentWeather();
  const isNightTime = isCurrentTimeNight(statistics.localTime);

  return (
    <div id={style.currentWeather}>
      <CurrentTemperature
        temp={currentTemp}
        weatherId={weatherId}
        isNightTime={isNightTime}
      />
      <Stats details={statistics} />
    </div>
  );
};
