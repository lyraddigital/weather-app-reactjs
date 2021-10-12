export const CurrentTemperature = ({ details }) => {
    const imgSrc = `icons/${details.weather === 0 ? 'sunny.svg': 'mostly-sunny.svg'}`;
    const imgAlt = `icons/${details.weather === 0 ? 'sunny.svg': 'mostly-sunny.svg'}`;
    const weatherSummary = details.weather === 0 ? 'Sunny': 'Mostly Sunny';

    return (
        <div className="current-temperature">
            <div className="current-temperature__icon-container">
                <img src={ imgSrc } className="current-temperature__icon" alt={ imgAlt } />
            </div>
            <div className="current-temperature__content-container">
                <div className="current-temperature__value">{ details.temp }&deg;</div>
                <div className="current-temperature__summary">{ weatherSummary }</div>
            </div>
        </div>
    );
}