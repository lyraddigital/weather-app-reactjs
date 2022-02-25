import { WeatherForecastDay } from 'models';
import { useForecast } from 'hooks';

import { ForecastDay } from './ForecastDay';

import style from './Forecast.module.scss';

export const Forecast = (): JSX.Element => {
  const forecast = useForecast();

  const daysEl = forecast.map(
    (d: WeatherForecastDay, i: number): JSX.Element => (
      <ForecastDay key={i} day={d} />
    ),
  );

  return (
    <div className={style.forecast}>
      <h2 className={style.heading}>Next 5 days</h2>
      {daysEl}
    </div>
  );
};
