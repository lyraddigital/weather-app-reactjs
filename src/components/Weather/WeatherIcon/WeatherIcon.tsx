import { getWeatherType, WeatherType } from 'core';
import { useCurrentWeatherTheme } from 'hooks';

import {
  AtmosphereIcon,
  ClearIcon,
  ClearNightIcon,
  CloudyIcon,
  CloudyNightIcon,
  DrizzleIcon,
  RainIcon,
  ShowerIcon,
  SnowIcon,
  ThunderStormIcon,
} from 'components/Icons';

interface WeatherIconProps {
  weatherId?: number;
}

const getCloudyLogo = (isDarkMode?: boolean): JSX.Element => {
  return isDarkMode ? <CloudyNightIcon /> : <CloudyIcon />;
};

const getClearLogo = (isDarkMode?: boolean): JSX.Element => {
  return isDarkMode ? <ClearNightIcon /> : <ClearIcon />;
};

export const WeatherIcon = ({
  weatherId,
}: WeatherIconProps): JSX.Element | null => {
  const weatherType = getWeatherType(weatherId);
  const { isDarkMode } = useCurrentWeatherTheme();

  if (weatherType === undefined || weatherType === null) {
    return null;
  }

  switch (weatherType) {
    case WeatherType.Atmospheric:
      return <AtmosphereIcon />;
    case WeatherType.Clear:
      return getClearLogo(isDarkMode);
    case WeatherType.Clouds:
      return getCloudyLogo(isDarkMode);
    case WeatherType.Drizzle:
      return <DrizzleIcon />;
    case WeatherType.Rain:
      return <RainIcon />;
    case WeatherType.Shower:
      return <ShowerIcon />;
    case WeatherType.Snow:
      return <SnowIcon />;
    case WeatherType.Thunderstorm:
      return <ThunderStormIcon />;
    default:
      return null;
  }
};
