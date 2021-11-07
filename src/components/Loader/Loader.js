import ClipLoader from 'react-spinners/ClipLoader';

import style from './Loader.module.scss';

export const Loader = ({ isLoading }) => {
  document.body.style.overflow = isLoading ? 'hidden' : 'auto';

  return isLoading ? (
    <div id={style.loaderOverlay}>
      <div id={style.loaderContent}>
        <p>Loading Weather data</p>
        <ClipLoader size={60} color="#FFF" />
        <p>Please wait.</p>
      </div>
    </div>
  ) : null;
};
