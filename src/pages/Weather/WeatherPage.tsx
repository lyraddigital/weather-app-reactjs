import { Redirect } from 'react-router';

import { WeatherProvider } from 'hoc';
import { useLocation } from 'hooks';
import { CurrentWeather, Forecast, Header, Timeline } from 'components/Weather';

export const WeatherPage = (): JSX.Element => {
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
};
