import { TimePeriod } from "./TimePeriod";

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
    <div className="weather-by-hour">
      <h2 className="weather-by-hour__heading">Today's weather</h2>
      <div className="weather-by-hour__container">
        { periodsEl }
      </div>
    </div>
  );
};
