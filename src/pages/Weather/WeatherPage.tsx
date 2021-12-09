import { Redirect } from 'react-router';

import { WeatherProvider } from 'hoc';
import { useLocation } from 'hooks';
import { WeatherThemedLayout } from 'components/Layouts';
import { CurrentWeather, Forecast, Header, Timeline } from 'components/Weather';

export const WeatherPage = (): JSX.Element => {
  const location = useLocation();

  if (!location) {
    return <Redirect to="/set-location" />;
  }

  return (
    <WeatherProvider>
      <WeatherThemedLayout>
        <Header />
        <CurrentWeather />
        <Timeline />
        <Forecast />
      </WeatherThemedLayout>
    </WeatherProvider>
  );
};
