import { useState } from 'react';
import { Redirect } from 'react-router';
import PlacesAutocomplete, {
  geocodeByAddress,
} from 'react-places-autocomplete';

import { useLocationUpdater } from 'hooks';

import style from './LocationPage.module.scss';

export const LocationPage = () => {
  const [cityName, setCityName] = useState('');
  const [locationSelected, setLocationSelected] = useState(false);
  const updateLocation = useLocationUpdater();

  const selectCity = async (address: any) => {
    setCityName(address);

    if (updateLocation) {
      const response = await geocodeByAddress(address);

      if (response && response.length > 0) {
        const addressDetails = response[0];
        const coords = addressDetails.geometry.location;
        const lat = coords.lat();
        const lon = coords.lng();
        const city =
          addressDetails.address_components.find((ac: any) =>
            ac.types.includes('locality'),
          )?.long_name || '';
        const country =
          addressDetails.address_components.find((ac: any) =>
            ac.types.includes('country'),
          )?.long_name || '';

        updateLocation({ lat, lon, city, country });
      }
    }

    setLocationSelected(true);
  };

  if (locationSelected) {
    return <Redirect to="/" />;
  }

  return (
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
  );
};
