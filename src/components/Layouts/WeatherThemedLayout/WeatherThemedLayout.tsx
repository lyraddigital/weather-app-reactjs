import { PropsWithChildren } from 'react';
import classNames from 'classnames';

import {
  useCurrentWeatherTheme,
  useLocationImage,
  useWeatherLoading,
} from 'hooks';
import { Loader } from 'components/Loader';

import style from './WeatherThemedLayout.module.scss';

export const WeatherThemedLayout = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => {
  const { isLoading, isFirstLoad } = useWeatherLoading();
  const { isDarkMode } = useCurrentWeatherTheme();
  const locationImage = useLocationImage();

  const isLoadingFirstTime = isLoading && isFirstLoad;
  const childContent = isLoadingFirstTime ? null : children;
  const locationBackgroundImage = locationImage
    ? `url(${locationImage})`
    : undefined;

  const classes = classNames({
    [style.layoutContainer]: true,
    [style.darkMode]: isDarkMode,
  });

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
