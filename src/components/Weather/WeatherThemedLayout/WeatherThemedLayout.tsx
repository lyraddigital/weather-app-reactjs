import { PropsWithChildren } from 'react';

import { useCurrentWeather } from 'hooks';
import { Loader } from 'components/Loader';

import style from './WeatherThemedLayout.module.scss';

export const WeatherThemedLayout = ({
  children,
}: PropsWithChildren<any>): JSX.Element => {
  const { isLoading, isDarkMode } = useCurrentWeather();
  const childContent = isLoading ? null : children;

  let classes = style.layoutContainer;

  if (isDarkMode) {
    classes += ` ${style.darkMode}`;
  }

  return (
    <div className={classes}>
      <div className={style.innerContainer}>
        <Loader isLoading={isLoading} />
        {childContent}
      </div>
    </div>
  );
};
