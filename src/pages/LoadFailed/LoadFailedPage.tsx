import style from './LoadFailedPage.module.scss';

export const LoadFailedPage = (): JSX.Element => {
  return (
    <div className={style.weatherFailedContainer}>
      <h1>Weather load failed</h1>
      <p>Could not load latest weather. Please call administration.</p>
    </div>
  );
};
