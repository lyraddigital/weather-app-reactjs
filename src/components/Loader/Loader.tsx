import ClipLoader from 'react-spinners/ClipLoader';

import style from './Loader.module.scss';

interface LoaderProps {
  isLoading: boolean;
}

export const Loader = ({ isLoading }: LoaderProps): JSX.Element | null => {
  document.body.style.overflow = isLoading ? 'hidden' : 'auto';

  return isLoading ? (
    <div id={style.loaderOverlay} data-testid="loader">
      <div id={style.loaderContent}>
        <p data-testid="loader-message-1">Loading Weather data</p>
        <ClipLoader size={60} color="#FFF" />
        <p data-testid="loader-message-2">Please wait.</p>
      </div>
    </div>
  ) : null;
};
