import { getWeatherDescription, getWeatherType, WeatherType } from 'core';
import { useCurrentWeatherTheme } from 'hooks';

import atmosphereLogo from '../../../assets/atmosphere.svg';
import clearNightLogo from '../../../assets/clear-night.svg';
import clearLogo from '../../../assets/clear.svg';
import cloudyNightLogo from '../../../assets/cloudy-night.svg';
import cloudyLogo from '../../../assets/cloudy.svg';
import drizzleLogo from '../../../assets/drizzle.svg';
import rainLogo from '../../../assets/rain.svg';
import showerLogo from '../../../assets/shower.svg';
import snowLogo from '../../../assets/snow.svg';
import thunderStormLogo from '../../../assets/thunder-storm.svg';

interface WeatherIconProps {
  className?: string;
  weatherId?: number;
}

const getCloudyLogo = (isDarkMode?: boolean): string => {
  return isDarkMode ? cloudyNightLogo : cloudyLogo;
};

const getClearLogo = (isDarkMode?: boolean): string => {
  return isDarkMode ? clearNightLogo : clearLogo;
};

export const WeatherIcon = ({ className, weatherId }: WeatherIconProps): JSX.Element | null => {
  const weatherType = getWeatherType(weatherId);
  const altText = getWeatherDescription(weatherId);
  const { isDarkMode } = useCurrentWeatherTheme();

  if (weatherType === undefined || weatherType === null) {
    return null;
  }

  let image: string | undefined = undefined;

  switch (weatherType) {
    case WeatherType.Atmospheric:
      image = atmosphereLogo;
      break;
    case WeatherType.Clear:
      image = getClearLogo(isDarkMode);
      break;
    case WeatherType.Clouds:
      image = getCloudyLogo(isDarkMode);
      break;
    case WeatherType.Drizzle:
      image = drizzleLogo;
      break;
    case WeatherType.Rain:
      image = rainLogo;
      break;
    case WeatherType.Shower:
      image = showerLogo;
      break;
    case WeatherType.Snow:
      image = snowLogo;
      break;
    case WeatherType.Thunderstorm:
      image = thunderStormLogo;
      break;
    default:
      break;
  }

  return <img src={image} className={className} alt={altText} />;
};
