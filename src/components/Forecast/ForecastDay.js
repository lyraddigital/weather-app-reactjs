import { format } from 'date-fns';

export const ForecastDay = ({ day }) => {
    if (!day) {
        return null;
    }

    const dayName = format(day.date, 'EEE');
    const shortDate = format(day.date, 'dd/M');
    const weatherImg = `icons/${ day.weather === 0 ? 'sunny.svg': 'mostly-sunny.svg' }`;
    const weatherAlt = day.weather === 0 ? 'Sunny': 'Mostly Sunny';

    return (
        <div className="next-5-days__row">
            <div className="next-5-days__date">
                { dayName }
                <div className="next-5-days__label">{ shortDate }</div>
            </div>

            <div className="next-5-days__low">
                { day.lowTemp }&deg;
                <div className="next-5-days__label">Low</div>
            </div>

            <div className="next-5-days__high">
                { day.highTemp }&deg;
                <div className="next-5-days__label">High</div>
            </div>

            <div className="next-5-days__icon">
                <img src={ weatherImg } alt={ weatherAlt } />
            </div>

            <div className="next-5-days__rain">
                { day.rainPercentage }%
                <div className="next-5-days__label">Rain</div>
            </div>

            <div className="next-5-days__wind">
                { day.windSpeed }mph
                <div className="next-5-days__label">Wind</div>
            </div>
        </div>
    );
};
