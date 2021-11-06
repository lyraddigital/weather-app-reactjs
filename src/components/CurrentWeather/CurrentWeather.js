import { CurrentTemperature } from '../CurrentTemperature/CurrentTemperature';
import { Stats } from '../Stats/Stats';
import { useCurrentWeather } from '../../hooks/useCurrentWeather';

import style from './CurrentWeather.module.scss';

export const CurrentWeather = () => {
    const { currentTemp, weatherType, statistics } = useCurrentWeather();

    return (
        <div id={ style.currentWeather }>
            <CurrentTemperature
                temp={ currentTemp }
                weatherType={ weatherType } />
            <Stats details={ statistics }  />
        </div>
    )
}