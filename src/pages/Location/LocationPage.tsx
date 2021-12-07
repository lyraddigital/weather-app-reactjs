import { useState } from 'react';
import { Redirect } from 'react-router';
import PlacesAutocomplete from 'react-places-autocomplete';

import { getLocationByAddress } from 'core';
import { useLocationUpdater } from 'hooks';
import { DefaultLayout } from 'components/DefaultLayout/DefaultLayout';

import style from './LocationPage.module.scss';

export const LocationPage = () => {
  const [cityName, setCityName] = useState<string>('');
  const [locationSelected, setLocationSelected] = useState(false);
  const updateLocation = useLocationUpdater();

  const selectCity = async (address: string) => {
    setCityName(address);

    if (updateLocation) {
      const response = await getLocationByAddress(address);

      if (response && response.success) {
        updateLocation({ 
          lat: response.lat,
          lon: response.lon, 
          city: response.city, 
          country: response.country 
        });
      }
    }

    setLocationSelected(true);
  };

  if (locationSelected) {
    return <Redirect to="/" />;
  }

  return (
    <DefaultLayout>
      <section id={style.locationSection}>
        <h1>Choose Region</h1>
        <p>Please start typing your city name in the textbox below.</p>
        <PlacesAutocomplete
          value={cityName}
          onChange={setCityName}
          onSelect={selectCity}
          searchOptions={{
            types: ['(cities)'],
          }}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }: any) => (
            <div className={style.autoCompleteContainer}>
              <input
                type="text"
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: style.autoComplete,
                })}
              />
              <div>{loading ? <div>...loading</div> : null}</div>
              <ul className={style.autoCompleteList}>
                {suggestions.map((s: any) => {
                  return (
                    <li
                      {...getSuggestionItemProps(s, {
                        className: 'suggestion-item',
                      })}
                      key={s.id}
                    >
                      {s.description}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </PlacesAutocomplete>
      </section>
    </DefaultLayout>
  );
};
