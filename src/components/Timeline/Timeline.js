import { TimePeriod } from "./TimePeriod";

import style from './Timeline.module.scss';

export const Timeline = () => {
  const periods = [
    {
      weather: 1,
      temp: 14,
      time: '3am'
    },
    {
      weather: 1,
      temp: 16,
      time: '6am'
    },
    {
      weather: 1,
      temp: 17,
      time: '9am'
    },
    {
      weather: 1,
      temp: 19,
      time: '12pm'
    },
    {
      weather: 0,
      temp: 21,
      time: '3pm'
    },
    {
      weather: 0,
      temp: 20,
      time: '6pm'
    },
    {
      weather: 1,
      temp: 18,
      time: '9pm'
    }
  ];

  const periodsEl = periods.map((p, i) => (
    <TimePeriod key={i} period={p} />
  ));

  return (
    <div className={ style.weatherByHour }>
      <h2 className={ style.heading }>Today's weather</h2>
      <div className={ style.container }>
        { periodsEl }
      </div>
    </div>
  );
};
