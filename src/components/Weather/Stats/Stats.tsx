import { formatTime } from 'core';
import { WeatherStatistics } from 'models';

import style from './Stats.module.scss';

interface StatsProps {
  details: WeatherStatistics;
}

export const Stats = ({ details }: StatsProps): JSX.Element => {
  const formattedSunrise = formatTime(details.sunriseTime);
  const formattedSunset = formatTime(details.sunsetTime);

  return (
    <div className={style.currentStats}>
      <div>
        <div data-testid="statistics-high-temp" className={style.value}>{details.highTemp}&deg;</div>
        <div className={style.label}>High</div>
      </div>
      <div>
        <div data-testid="statistics-low-temp" className={style.value}>{details.lowTemp}&deg;</div>
        <div className={style.label}>Low</div>
      </div>
      <div>
        <div data-testid="statistics-wind-speed" className={style.value}>{details.windSpeed}km/h</div>
        <div className={style.label}>Wind</div>
      </div>
      <div>
        <div data-testid="statistics-rain-percentage" className={style.value}>{details.rainPercentage}%</div>
        <div className={style.label}>Rain</div>
      </div>
      <div>
        <div data-testid="statistics-sunrise-time" className={style.value}>{formattedSunrise}</div>
        <div className={style.label}>Sunrise</div>
      </div>
      <div>
        <div data-testid="statistics-sunset-time" className={style.value}>{formattedSunset}</div>
        <div className={style.label}>Sunset</div>
      </div>
    </div>
  );
};
