import style from './TimePeriod.module.scss';

export const TimePeriod = ({ period }) => {
    const imgSrc = `icons/${period.weather === 0 ? 'sunny.svg': 'mostly-sunny.svg'}`;
    const imgAlt = `icons/${period.weather === 0 ? 'sunny.svg': 'mostly-sunny.svg'}`;

    return (
        <div className={ style.item }>
            <div className={ style.hour }>{ period.time }</div>
            <img src={ imgSrc } alt={ imgAlt } />
            <div>{ period.temp }&deg;</div>
        </div>
    );
  };
  