import { useEffect, useRef } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import classNames from 'classnames';

import { useCurrentWeatherTheme } from 'hooks';

import style from './Loader.module.scss';

interface LoaderProps {
  isLoading: boolean;
}

export const Loader = ({ isLoading }: LoaderProps): JSX.Element | null => {
  const { isDarkMode } = useCurrentWeatherTheme();
  const overlayClasses = classNames({
    [style.loaderOverlay]: true,
    [style.darkMode]: isDarkMode,
  });
  const bodyRef = useRef(document.body);

  useEffect(() => {
    bodyRef.current.style.overflow = isLoading ? 'hidden' : 'auto';
  }, [isLoading]);

  return isLoading ? (
    <div className={overlayClasses}>
      <div className={style.loaderContent}>
        <p>Loading Weather data</p>
        <ClipLoader size={60} color="#FFF" />
        <p>Please wait.</p>
      </div>
    </div>
  ) : null;
};
