import { CurrentTemperature } from '../CurrentTemperature/CurrentTemperature';
import { Stats } from '../Stats/Stats';
import { useCurrentWeather } from '../../hooks/useCurrentWeather';

export const CurrentWeather = ({ location }) => {
    const { currentTemp, weatherType, statistics } = useCurrentWeather(location);

    return (
        <>
            <CurrentTemperature
                temp={ currentTemp }
                weatherType={ weatherType } />
            <Stats details={ statistics }  />
        </>
    )
}