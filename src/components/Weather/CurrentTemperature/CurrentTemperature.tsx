import style from './CurrentTemperature.module.scss';

interface CurrentTemperatureProps {
  temp: number;
  weatherType: number;
}

export const CurrentTemperature = (
  props: CurrentTemperatureProps,
): JSX.Element => {
  const { temp, weatherType } = props;
  const imgSrc = `icons/${
    weatherType === 0 ? 'sunny.svg' : 'mostly-sunny.svg'
  }`;
  const weatherSummary = weatherType === 0 ? 'Sunny' : 'Mostly Sunny';

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
