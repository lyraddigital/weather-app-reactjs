import style from './CurrentTemperature.module.scss';

export const CurrentTemperature = ({ temp, weatherType }) => {
  const imgSrc = `icons/${
    weatherType === 0 ? 'sunny.svg' : 'mostly-sunny.svg'
  }`;
  const imgAlt = `icons/${
    weatherType === 0 ? 'sunny.svg' : 'mostly-sunny.svg'
  }`;
  const weatherSummary = weatherType === 0 ? 'Sunny' : 'Mostly Sunny';

  return (
    <div className={style.currentTemperature}>
      <div className={style.iconContainer}>
        <img src={imgSrc} className={style.icon} alt={imgAlt} />
      </div>
      <div className={style.contentContainer}>
        <div className={style.value}>{temp}&deg;</div>
        <div className={style.summary}>{weatherSummary}</div>
      </div>
    </div>
  );
};
