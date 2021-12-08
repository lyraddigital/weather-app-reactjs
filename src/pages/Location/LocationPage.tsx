import { DefaultLayout } from 'components/Layouts';
import { LocationSearch } from 'components/Location';

import style from './LocationPage.module.scss';

export const LocationPage = (): JSX.Element => {
  return (
    <DefaultLayout>
      <section id={style.locationSection}>
        <h1>Choose Region</h1>
        <p>Please start typing your city name in the textbox below.</p>
        <LocationSearch />
      </section>
    </DefaultLayout>
  );
};
