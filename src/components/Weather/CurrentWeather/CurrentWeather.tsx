import { useCurrentWeather } from 'hooks';
import { CurrentTemperature, Stats } from 'components/Weather';

import style from './CurrentWeather.module.scss';

export const CurrentWeather = (): JSX.Element => {
  const { currentTemp, weatherType, statistics } = useCurrentWeather();

  return (
    <div id={style.currentWeather}>
      <CurrentTemperature temp={currentTemp} weatherType={weatherType} />
      <Stats details={statistics} />
    </div>
  );
};
