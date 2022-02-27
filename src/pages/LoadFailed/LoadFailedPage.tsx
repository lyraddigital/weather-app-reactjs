import { DefaultLayout } from 'components/Layouts';

import style from './LoadFailedPage.module.scss';

export const LoadFailedPage = (): JSX.Element => {
  return (
    <DefaultLayout>
      <div className={style.weatherFailedContainer}>
        <h1>Weather load failed</h1>
        <p>Could not load latest weather. Please call administration.</p>
      </div>
    </DefaultLayout>
  );
};
