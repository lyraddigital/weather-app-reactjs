import { WeatherTimelinePeriod } from 'models';
import { useTimeline } from 'hooks';

import { TimePeriod } from './TimePeriod';

import style from './Timeline.module.scss';

export const Timeline = (): JSX.Element => {
  const periods = useTimeline();
  const periodsEl = periods.map(
    (p: WeatherTimelinePeriod, i: number): JSX.Element => (
      <TimePeriod key={i} period={p} />
    ),
  );

  return (
    <div className={style.weatherByHour}>
      <h2 className={style.heading}>Today&apos;s weather</h2>
      <div className={style.container}>{periodsEl}</div>
    </div>
  );
};
