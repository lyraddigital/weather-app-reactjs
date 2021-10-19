import { Redirect } from "react-router";

import { Header } from 'components/Header/Header';
import { CurrentWeather } from 'components/CurrentWeather/CurrentWeather';
import { Timeline } from 'components/Timeline/Timeline';
import { Forecast } from 'components/Forecast/Forecast';
import { WeatherProvider } from "components/WeatherProvider/WeatherProvider";
import { useLocation } from "hooks/useLocation";

export const WeatherPage = () => {
    const location = useLocation();

    if (!location) {
        return <Redirect to="/set-location" />;
    }

    return (
        <WeatherProvider>
            <Header />
            <CurrentWeather />      
            <Timeline />
            <Forecast />
        </WeatherProvider>        
    );
}