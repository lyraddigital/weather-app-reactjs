import { format } from "date-fns";

export const Stats = ({ details }) => {
  const formattedSunrise = format(details.sunriseTime, 'HH:mm');
  const formattedSunset = format(details.sunsetTime, 'HH:mm');

  return (
    <div className="current-stats">
      <div>
        <div className="current-stats__value">{ details.highTemp }&deg;</div>
        <div className="current-stats__label">High</div>
        <div className="current-stats__value">{ details.lowTemp }&deg;</div>
        <div className="current-stats__label">Low</div>
      </div>
      <div>
        <div className="current-stats__value">{ details.windSpeed }mph</div>
        <div className="current-stats__label">Wind</div>
        <div className="current-stats__value">{ details.rainPercentage }%</div>
        <div className="current-stats__label">Rain</div>
      </div>
      <div>
        <div className="current-stats__value">{ formattedSunrise }</div>
        <div className="current-stats__label">Sunrise</div>
        <div className="current-stats__value">{ formattedSunset }</div>
        <div className="current-stats__label">Sunset</div>
      </div>
    </div>
  );
};
