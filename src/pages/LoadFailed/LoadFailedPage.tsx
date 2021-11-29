import style from './LoadFailedPage.module.scss';

export const LoadFailedPage = (): JSX.Element => {
  return (
    <div className={style.weatherFailedContainer}>
      <h1 data-testid="loader-error-heading">Weather load failed</h1>
      <p data-testid="loader-error-message">
        Could not load latest weather. Please call administration.
      </p>
    </div>
  );
};
