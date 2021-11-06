import { TimePeriod } from "./TimePeriod";

import { useTimeline } from "hooks";

import style from './Timeline.module.scss';

export const Timeline = () => {
  const { periods } = useTimeline();

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
