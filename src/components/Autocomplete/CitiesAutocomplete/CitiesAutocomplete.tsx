import PlacesAutocomplete from 'react-places-autocomplete';

import { AutocompleteInput } from '../AutocompleteInput/AutocompleteInput';
import { AutocompleteResults } from '../AutocompleteResults/AutocompleteResults';

import style from './CitiesAutocomplete.module.scss';

export const CitiesAutocomplete = ({
  cityName,
  setCityName,
  selectCity,
}: any) => {
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