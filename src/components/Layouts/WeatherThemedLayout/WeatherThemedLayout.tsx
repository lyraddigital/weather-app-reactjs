import { PropsWithChildren } from 'react';

import { useCurrentWeather } from 'hooks';
import { Loader } from 'components/Loader';

import { useWeatherLoading } from 'hooks/useWeatherLoading';
import style from './WeatherThemedLayout.module.scss';

export const WeatherThemedLayout = ({
  children,
}: PropsWithChildren<any>): JSX.Element => {
  const { isLoading, isFirstLoad } = useWeatherLoading();
  const { isDarkMode } = useCurrentWeather();

  const isLoadingFirstTime = isLoading && isFirstLoad;
  const childContent = isLoadingFirstTime ? null : children;

  let classes = style.layoutContainer;

  if (isDarkMode) {
    classes += ` ${style.darkMode}`;
  }

  return (
    <div
      className={style.cityImage}
      style={{
        backgroundImage:
          'url(https://ichef.bbci.co.uk/news/976/cpsprodpb/5F54/production/_115040442_gettyimages-1264168420.jpg)',
      }}
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
