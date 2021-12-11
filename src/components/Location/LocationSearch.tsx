import { useState } from 'react';
import { Redirect } from 'react-router';
import PlacesAutocomplete from 'react-places-autocomplete';

import { getLocationByAddress } from 'core';
import { useLocationUpdater } from 'hooks';
import {
  AutocompleteInput,
  AutocompleteResults,
} from 'components/Autocomplete';

import style from './LocationSearch.module.scss';

export const LocationSearch = (): JSX.Element => {
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
          country: response.country,
        });
      }
    }

    setLocationSelected(true);
  };

  if (locationSelected) {
    return <Redirect to="/" />;
  }

  return (
    <PlacesAutocomplete
      value={cityName}
      onChange={setCityName}
      onSelect={selectCity}
      searchOptions={{
        types: ['(cities)'],
      }}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className={style.autoCompleteContainer}>
          <AutocompleteInput inputProps={getInputProps} isLoading={loading} />
          <AutocompleteResults
            suggestions={suggestions}
            getSuggestionItemProps={getSuggestionItemProps}
          />
        </div>
      )}
    </PlacesAutocomplete>
  );
};
