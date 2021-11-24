import { WeatherIcon } from '../WeatherIcon/WeatherIcon';
import style from './CurrentTemperature.module.scss';

interface CurrentTemperatureProps {
  temp: number;
  weatherId: number;
}

export const CurrentTemperature = (
  props: CurrentTemperatureProps,
): JSX.Element => {
  const { temp, weatherId } = props;
  const weatherSummary = weatherId === 0 ? 'Sunny' : 'Mostly Sunny';

  return (
    <div className={style.currentTemperature}>
      <div className={style.iconContainer}>
        <WeatherIcon weatherId={weatherId} className={style.icon} iconAlt={weatherSummary} />
      </div>
      <div className={style.contentContainer}>
        <div className={style.value}>{temp}&deg;</div>
        <div className={style.summary}>{weatherSummary}</div>
      </div>
    </div>
  );
};
