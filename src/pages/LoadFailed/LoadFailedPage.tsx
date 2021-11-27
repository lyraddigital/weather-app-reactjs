import style from './LoadFailedPage.module.scss';

export const LoadFailedPage = (): JSX.Element => {
  return (
    <div className={style.weatherFailedContainer}>
      <h1>Weather load failed</h1>
      <div>Could not load latest weather. Please call administration.</div>
    </div>
  );
};
