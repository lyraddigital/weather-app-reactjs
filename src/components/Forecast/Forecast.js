import { ForecastDay } from "./ForecastDay";

import style from './Forecast.module.scss';

export const Forecast = () => {
  const forecast = null;

  const days = [
    {
      date: new Date(2021, 9, 12),
      weather: 0,
      lowTemp: 10,
      highTemp: 21,
      rainPercentage: 0,
      windSpeed: 12
    },
    {
      date: new Date(2021, 9, 13),
      weather: 1,
      lowTemp: 9,
      highTemp: 18,
      rainPercentage: 3,
      windSpeed: 7
    },
    {
      date: new Date(2021, 9, 14),
      weather: 1,
      lowTemp: 7,
      highTemp: 15,
      rainPercentage: 75,
      windSpeed: 11
    },
    {
      date: new Date(2021, 9, 15),
      weather: 0,
      lowTemp: 12,
      highTemp: 24,
      rainPercentage: 2,
      windSpeed: 8
    },
    {
      date: new Date(2021, 9, 16),
      weather: 1,
      lowTemp: 10,
      highTemp: 21,
      rainPercentage: 0,
      windSpeed: 12
    }
  ];

  const daysEl = days.map((d, i) => (
    <ForecastDay key={i} day={d} />
  ));

  return (
    <div className={ style.forecast }>
      <h2 className={ style.heading }>Next 5 days</h2>
      <div className={ style.container }>
        { daysEl }
      </div>
    </div>
  );
};
