import { format } from "date-fns";

import style from './Stats.module.scss';

export const Stats = ({ details }) => {
  const formattedSunrise = format(details.sunriseTime, 'HH:mm');
  const formattedSunset = format(details.sunsetTime, 'HH:mm');

  return (
    <div className={ style.currentStats }>
      <div>
        <div className={ style.value }>{ details.highTemp }&deg;</div>
        <div className={ style.label }>High</div>
        <div className={ style.value }>{ details.lowTemp }&deg;</div>
        <div className={ style.label }>Low</div>
      </div>
      <div>
        <div className={ style.value }>{ details.windSpeed }mph</div>
        <div className={ style.label }>Wind</div>
        <div className={ style.value }>{ details.rainPercentage }%</div>
        <div className={ style.label }>Rain</div>
      </div>
      <div>
        <div className={ style.value }>{ formattedSunrise }</div>
        <div className={ style.label }>Sunrise</div>
        <div className={ style.value }>{ formattedSunset }</div>
        <div className={ style.label }>Sunset</div>
      </div>
    </div>
  );
};
