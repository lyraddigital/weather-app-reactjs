import { Redirect } from "react-router";

import { useLocation } from "hooks";
import { CurrentWeather, Forecast, Header, Timeline, WeatherProvider } from 'components/Weather';

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