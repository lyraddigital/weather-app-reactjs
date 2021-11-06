import { useForecast } from 'hooks';

import { ForecastDay } from './ForecastDay';

import style from './Forecast.module.scss';

export const Forecast = () => {
  const { forecast } = useForecast();

  const daysEl = forecast.map((d, i) => <ForecastDay key={i} day={d} />);

  return (
    <div className={style.forecast}>
      <h2 className={style.heading}>Next 5 days</h2>
      <div className={style.container}>{daysEl}</div>
    </div>
  );
};
