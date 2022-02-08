import { PropsWithChildren } from 'react';

import { useCurrentWeather, useLocationImage, useWeatherLoading } from 'hooks';
import { Loader } from 'components/Loader';

import style from './WeatherThemedLayout.module.scss';

export const WeatherThemedLayout = ({
  children,
}: PropsWithChildren<any>): JSX.Element => {
  const { isLoading, isFirstLoad } = useWeatherLoading();
  const { isDarkMode } = useCurrentWeather();
  const locationImage = useLocationImage();

  const isLoadingFirstTime = isLoading && isFirstLoad;
  const childContent = isLoadingFirstTime ? null : children;
  const locationBackgroundImage = locationImage
    ? `url(${locationImage})`
    : undefined;

  let classes = style.layoutContainer;

  if (isDarkMode) {
    classes += ` ${style.darkMode}`;
  }

  return (
    <div
      className={style.cityImage}
      style={{ backgroundImage: locationBackgroundImage }}
    >
      <div className={classes}>
        <div className={style.innerContainer}>
          <Loader isLoading={isLoading} />
          {childContent}
        </div>
      </div>
    </div>
  );
};
