import classNames from 'classnames';
import ClipLoader from 'react-spinners/ClipLoader';

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

  document.body.style.overflow = isLoading ? 'hidden' : 'auto';

  return isLoading ? (
    <div className={overlayClasses} data-testid="loader">
      <div className={style.loaderContent}>
        <p data-testid="loader-message-1">Loading Weather data</p>
        <ClipLoader size={60} color="#FFF" />
        <p data-testid="loader-message-2">Please wait.</p>
      </div>
    </div>
  ) : null;
};
