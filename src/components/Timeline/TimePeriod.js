export const TimePeriod = ({ period }) => {
    const imgSrc = `icons/${period.weather === 0 ? 'sunny.svg': 'mostly-sunny.svg'}`;
    const imgAlt = `icons/${period.weather === 0 ? 'sunny.svg': 'mostly-sunny.svg'}`;

    return (
        <div className="weather-by-hour__item">
            <div className="weather-by-hour__hour">{ period.time }</div>
            <img src={ imgSrc } alt={ imgAlt } />
            <div>{ period.temp }&deg;</div>
        </div>
    );
  };
  