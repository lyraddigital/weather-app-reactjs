import { TimePeriod } from './TimePeriod';

import { WeatherTimelinePeriod } from 'models';
import { useTimeline } from 'hooks';

import style from './Timeline.module.scss';

export const Timeline = (): JSX.Element => {
  const periods = useTimeline();

  const periodsEl = periods.map((p: WeatherTimelinePeriod, i: number) => (
    <TimePeriod key={i} period={p} />
  ));

  return (
    <div className={style.weatherByHour}>
      <h2 data-testid="timeline-heading" className={style.heading}>
        Today's weather
      </h2>
      <div className={style.container}>{periodsEl}</div>
    </div>
  );
};
