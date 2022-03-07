import { useCurrentWeather } from 'hooks';

import { CurrentWeather } from '../CurrentWeather';
import { Forecast } from '../Forecast';
import { Timeline } from '../Timeline';

import style from './WeatherContent.module.scss';

export const WeatherContent = (): JSX.Element => {
  const currentWeather = useCurrentWeather();

  if (!currentWeather?.currentTemp) {
    return <div className={style.noWeatherData}>No weather data found..</div>;
  }

  return (
    <>
      <CurrentWeather />
      <Timeline />
      <Forecast />
    </>
  );
};
