import ClipLoader from 'react-spinners/ClipLoader';

import style from './Loader.module.scss';

export const Loader = ({ isLoading }) => {
  return (
    <div id={style.loaderOverlay}>
      <ClipLoader isLoading={isLoading} />
    </div>
  );
};
