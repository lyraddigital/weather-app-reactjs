import { useCurrentWeather } from 'hooks';

import { CurrentTemperature } from '../CurrentTemperature';
import { Stats } from '../Stats';

import style from './CurrentWeather.module.scss';

export const CurrentWeather = (): JSX.Element => {
  const { currentTemp, weatherId, statistics } = useCurrentWeather();

  return (
    <div id={style.currentWeather}>
      <CurrentTemperature temp={currentTemp} weatherId={weatherId} />
      <Stats details={statistics} />
    </div>
  );
};
