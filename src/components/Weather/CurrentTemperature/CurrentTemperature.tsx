import { getWeatherType } from 'core';
import style from './CurrentTemperature.module.scss';

interface CurrentTemperatureProps {
  temp: number;
  weatherId: number;
}

export const CurrentTemperature = (
  props: CurrentTemperatureProps,
): JSX.Element => {
  const { temp, weatherId } = props;
  const imgSrc = getWeatherType(weatherId);
  const weatherSummary = weatherId === 0 ? 'Sunny' : 'Mostly Sunny';

  return (
    <div className={style.currentTemperature}>
      <div className={style.iconContainer}>
        <img src={imgSrc} className={style.icon} alt={weatherSummary} />
      </div>
      <div className={style.contentContainer}>
        <div className={style.value}>{temp}&deg;</div>
        <div className={style.summary}>{weatherSummary}</div>
      </div>
    </div>
  );
};
